import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { isAuth } from "../middleware/isAuth";
import { MyApolloContext } from "../context";
import { CommentInput } from "./inputs/inputs";
import { CommentResponseObject } from "./outputs/outputs";

@Resolver()
export class CommentResolver {
  @Mutation(() => CommentResponseObject)
  @UseMiddleware(isAuth)
  async addComment(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("data") data: CommentInput
  ): Promise<CommentResponseObject> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    if (data.body.length < 1) {
      return { error: "body can not be empty" };
    }

    const post = await prisma.post.findUnique({ where: { id: data.postId } });

    if (!post) {
      throw new Error("could not find post");
    }

    const comment = await prisma.comment.create({
      data: { ...data, authorId: user.id },
    });

    return { comment };
  }
}
