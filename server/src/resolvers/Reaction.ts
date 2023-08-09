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
import { Reaction } from "../generated/type-graphql";
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

    let reaction = await prisma.reaction.findFirst({
      where: { authorId: user.id, postId: post.id },
    });

    if (reaction) {
      await prisma.reaction.update({
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

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async removeReaction(
    @Arg("reactionId") reactionId: number,
    @Ctx() { prisma, payload }: MyApolloContext,
    @PubSub() pubSub: PubSubEngine
  ): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    const reaction = await prisma.reaction.findUnique({
      where: { id: reactionId },
    });

    if (!reaction) {
      throw new Error("could not find reaction");
    }

    const post = await prisma.post.findUnique({
      where: { id: reaction.postId },
    });

    if (!post) {
      throw new Error("could not find post");
    }

    await prisma.reaction.delete({ where: reaction });

    await pubSub.publish(Topic.UpdatePost, post.id);

    return true;
  }
}
