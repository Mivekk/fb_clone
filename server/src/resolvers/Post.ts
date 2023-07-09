import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { isAuth } from "../middleware/isAuth";
import { MyApolloContext } from "../context";
import { PostResponseObject } from "./outputs/outputs";
import { PostInput } from "./inputs/inputs";

@Resolver()
export class PostResolver {
  @Mutation(() => PostResponseObject)
  @UseMiddleware(isAuth)
  async createPost(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("data") data: PostInput
  ): Promise<PostResponseObject> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    if (data.title.length < 1) {
      return { error: "title can not be empty" };
    }

    if (data.body.length < 1) {
      return { error: "body can not be empty" };
    }

    const post = await prisma.post.create({
      data: { ...data, authorId: user.id },
    });

    return { post };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("postId") postId: number
  ): Promise<Boolean> {
    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!post) {
      throw new Error("post does not exist");
    }

    if (post.authorId !== payload?.userId) {
      throw new Error("post has different author");
    }

    await prisma.post.delete({ where: { id: post.id } });

    return true;
  }
}
