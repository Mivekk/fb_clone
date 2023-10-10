import {
  Arg,
  Args,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";

import { MyApolloContext } from "../context";
import { Comment, CommentWhereInput } from "../generated/type-graphql";
import { isAuth } from "../middleware/isAuth";
import { AddCommentInput, PaginationArgs } from "./utils/inputs";
import {
  AddCommentResponseObject,
  PaginatedCommentsObject,
} from "./utils/outputs";
import { Topic } from "./utils/topics";

const MAX_COMMENT_LENGTH = 2048;

@Resolver()
export class CommentResolver {
  @Query(() => [Comment])
  @UseMiddleware(isAuth)
  async comments(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("where") where?: CommentWhereInput
  ): Promise<Comment[]> {
    const comments = await prisma.comment.findMany({
      where,
    });

    return comments;
  }

  @Query(() => PaginatedCommentsObject)
  @UseMiddleware(isAuth)
  async paginatedComments(
    @Ctx() { prisma }: MyApolloContext,
    @Args() { where, cursor, take }: PaginationArgs
  ): Promise<PaginatedCommentsObject> {
    const realTake = take + 1;

    const comments = await prisma.comment.findMany({
      where,
      cursor: cursor ? { id: cursor } : undefined,
      take: realTake,
      orderBy: { id: "desc" },
      skip: cursor ? 1 : undefined,
      include: { replies: true },
    });

    const commentsWithReplies = comments.map((comment) => ({
      comment,
      hasReplies: comment.replies.length > 0,
    }));

    return {
      comments: commentsWithReplies.slice(0, realTake),
      hasMore: comments.length === realTake,
    };
  }

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

    if (data.body.length > MAX_COMMENT_LENGTH) {
      return { error: "body must have less than 2048 characters" };
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

    await prisma.comment.update({
      where: comment,
      data: { reactions: { deleteMany: {} } },
    });

    await prisma.comment.delete({ where: comment });

    await pubSub.publish(Topic.UpdatePost, post.id);

    return true;
  }
}
