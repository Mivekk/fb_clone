import {
  Arg,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  Resolver,
  UseMiddleware,
} from "type-graphql";

import { isAuth } from "../middleware/isAuth";
import { MyApolloContext } from "../context";
import { AddCommentInput } from "./utils/inputs";
import { AddCommentResponseObject } from "./utils/outputs";
import { Topic } from "./utils/topics";

@Resolver()
export class CommentResolver {
  @Mutation(() => AddCommentResponseObject)
  @UseMiddleware(isAuth)
  async addComment(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("data") data: AddCommentInput,
    @PubSub() pubSub: PubSubEngine
  ): Promise<AddCommentResponseObject> {
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

    await pubSub.publish(Topic.UpdatePost, post.id);

    return { comment };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteComment(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("commentId") commentId: number,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Boolean> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new Error("could not find comment");
    }

    const post = await prisma.post.findUnique({
      where: { id: comment.postId },
    });

    if (!post) {
      throw new Error("could not find post");
    }

    if (comment.authorId !== user.id) {
      throw new Error("comment has different author");
    }

    await prisma.comment.delete({ where: comment });

    await pubSub.publish(Topic.UpdatePost, post.id);

    return true;
  }
}
