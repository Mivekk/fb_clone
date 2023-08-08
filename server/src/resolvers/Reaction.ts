import { Arg, Ctx, Mutation, UseMiddleware } from "type-graphql";
import { MyApolloContext } from "../context";
import { isAuth } from "../middleware/isAuth";
import { AddLikeInput } from "./utils/inputs";
import { Reaction } from "../generated/type-graphql";

export class ReactionResolver {
  @Mutation(() => Reaction)
  @UseMiddleware(isAuth)
  async addReaction(
    @Arg("data") data: AddLikeInput,
    @Ctx() { prisma, payload }: MyApolloContext
  ): Promise<Reaction> {
    const user = await prisma.user.findFirst({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    const post = await prisma.post.findFirst({ where: { id: data.postId } });

    if (!post) {
      throw new Error("could not find post");
    }

    const reaction = await prisma.reaction.create({
      data: { ...data, authorId: user.id },
    });

    return reaction;
  }
}
