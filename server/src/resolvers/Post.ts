import {
  Arg,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  Resolver,
  Root,
  Subscription,
  UseMiddleware,
} from "type-graphql";

import { isAuth } from "../middleware/isAuth";
import { MyApolloContext, MyApolloSubscriptionContext } from "../context";
import { PostResponseObject } from "./utils/outputs";
import { PostInput } from "./utils/inputs";
import { Topic } from "./utils/topics";
import { Post } from "../generated/type-graphql";

@Resolver()
export class PostResolver {
  @Mutation(() => PostResponseObject)
  @UseMiddleware(isAuth)
  async createPost(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("data") data: PostInput,
    @PubSub() pubSub: PubSubEngine
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

    await pubSub.publish(Topic.NewPost, post.id);
    return { post };
  }

  @Subscription(() => Post, { nullable: true, topics: Topic.NewPost })
  async newPost(
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
