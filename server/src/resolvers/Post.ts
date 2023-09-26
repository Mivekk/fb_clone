import {
  Arg,
  Args,
  Ctx,
  Mutation,
  Query,
  Resolver,
  Root,
  Subscription,
  UseMiddleware,
} from "type-graphql";

import { MyApolloContext, MyApolloSubscriptionContext } from "../context";
import { FindManyPostArgs, Post } from "../generated/type-graphql";
import { isAuth } from "../middleware/isAuth";
import { CreatePostInput } from "./utils/inputs";
import {
  CreatePostResponseObject,
  PostEngagementMetricsObject,
} from "./utils/outputs";
import { Topic } from "./utils/topics";

const MAX_TITLE_LENGTH = 128;
const MAX_BODY_LENGTH = 4096;

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  @UseMiddleware(isAuth)
  async posts(
    @Ctx() { prisma }: MyApolloContext,
    @Args() args: FindManyPostArgs
  ) {
    const posts = await prisma.post.findMany({ ...(args as any) });

    return posts;
  }

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

    if (data.title.length > MAX_TITLE_LENGTH) {
      return { error: "title must have less than 128 characters" };
    }

    if (data.body.length > MAX_BODY_LENGTH) {
      return { error: "body must have less than 4096 characters" };
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
      where: post,
      data: { comments: { deleteMany: {} }, reactions: { deleteMany: {} } },
    });

    await prisma.post.delete({ where: post });

    return true;
  }

  @Query(() => PostEngagementMetricsObject)
  async postEngagementMetrics(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("postId") postId: number
  ): Promise<PostEngagementMetricsObject> {
    const comments = await prisma.comment.count({ where: { postId } });
    const likes = await prisma.reaction.count({
      where: { postId, type: "LIKE" },
    });
    const dislikes = await prisma.reaction.count({
      where: { postId, type: "DISLIKE" },
    });

    return {
      comments,
      likes,
      dislikes,
    };
  }
}
