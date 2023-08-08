import {
  Arg,
  Ctx,
  Mutation,
  Resolver,
  Root,
  Subscription,
  UseMiddleware,
} from "type-graphql";

import { MyApolloContext, MyApolloSubscriptionContext } from "../context";
import { Post } from "../generated/type-graphql";
import { isAuth } from "../middleware/isAuth";
import { CreatePostInput } from "./utils/inputs";
import { CreatePostResponseObject } from "./utils/outputs";
import { Topic } from "./utils/topics";

@Resolver()
export class PostResolver {
  @Mutation(() => CreatePostResponseObject)
  @UseMiddleware(isAuth)
  async createPost(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("data") data: CreatePostInput
  ): Promise<CreatePostResponseObject> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    if (data.body.length < 1 || data.title.length < 1) {
      return { error: "content can not be empty" };
    }

    const post = await prisma.post.create({
      data: { ...data, authorId: user.id },
    });

    return { post };
  }

  @Subscription(() => Post, { nullable: true, topics: Topic.UpdatePost })
  async udpatePost(
    @Ctx() { prisma }: MyApolloSubscriptionContext,
    @Root() postId: number
  ): Promise<Post | null> {
    const post = await prisma.post.findUnique({ where: { id: postId } });

    return post;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("postId") postId: number
  ): Promise<Boolean> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!post) {
      throw new Error("post does not exist");
    }

    if (post.authorId !== user.id) {
      throw new Error("post has different author");
    }

    await prisma.post.update({
      where: { id: post.id },
      data: { comments: { deleteMany: {} } },
    });

    await prisma.post.delete({ where: post });

    return true;
  }
}
