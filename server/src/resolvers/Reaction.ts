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

    // remove previous reaction
    const previousReaction = await prisma.reaction.findFirst({
      where: { authorId: user.id, postId: post.id },
    });
    if (previousReaction) {
      await prisma.reaction.delete({ where: previousReaction });
    }

    const reaction = await prisma.reaction.create({
      data: { ...data, authorId: user.id },
    });

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

    await prisma.reaction.delete({ where: reaction });

    return true;
  }
}
