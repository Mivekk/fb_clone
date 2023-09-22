import {
  Arg,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  UseMiddleware,
} from "type-graphql";
import { MyApolloContext } from "../context";
import { isAuth } from "../middleware/isAuth";
import { AddReactionInput } from "./utils/inputs";
import { Reaction, ReactionType } from "../generated/type-graphql";
import { Topic } from "./utils/topics";

export class ReactionResolver {
  @Mutation(() => Reaction)
  @UseMiddleware(isAuth)
  async addReaction(
    @Arg("data") data: AddReactionInput,
    @Ctx() { prisma, payload }: MyApolloContext,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Reaction> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    const post = await prisma.post.findUnique({ where: { id: data.postId } });

    if (!post) {
      throw new Error("could not find post");
    }

    if (!Object.values(ReactionType).includes(data.type)) {
      throw new Error("invalid reaction type");
    }

    let reaction = await prisma.reaction.findFirst({
      where: { authorId: user.id, postId: post.id },
    });

    if (reaction && reaction.type === data.type) {
      reaction = await prisma.reaction.delete({ where: reaction });
    } else if (reaction) {
      reaction = await prisma.reaction.update({
        where: reaction,
        data: { type: data.type },
      });
    } else {
      reaction = await prisma.reaction.create({
        data: { ...data, authorId: user.id },
      });
    }

    await pubSub.publish(Topic.UpdatePost, post.id);

    return reaction;
  }
}
