import "reflect-metadata";

import {
  clearDatabase,
  graphqlAddComment,
  graphqlCreatePost,
  graphqlDeleteComment,
  graphqlDeletePost,
  graphqlLogin,
  graphqlRegister,
} from "../test-utils/functions";
import { graphqlWrapper } from "../test-utils/graphqlWrapper";
import { addCommentMutation } from "../test-utils/queries";
import prisma from "../client";

describe("comment", () => {
  let postId = 0;
  let accessToken = "";
  beforeEach(async () => {
    await clearDatabase();

    await graphqlRegister();

    const login = await graphqlLogin();
    accessToken = login.data?.login.accessToken;

    const post = await graphqlCreatePost(accessToken);
    postId = post.data?.createPost.post.id;
  });

  describe("add comment", () => {
    test("new comment", async () => {
      const result = await graphqlAddComment(accessToken, postId);

      expect(result.errors).toBeUndefined();
      expect(result.data?.addComment.error).toBeNull();
      expect(result.data?.addComment.comment).toMatchObject({
        body: "test body",
      });
    });

    test("post doesn't exist", async () => {
      const result = await graphqlAddComment(accessToken, -1);

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("could not find post");
    });

    test("empty body", async () => {
      const result: any = await graphqlWrapper({
        source: addCommentMutation,
        variableValues: {
          data: {
            postId,
            body: "",
          },
        },
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        },
      });

      expect(result.errors).toBeUndefined();
      expect(result.data?.addComment.error).toMatch("body can not be empty");
      expect(result.data?.addComment.comment).toBeNull();
    });

    test("not authenticated", async () => {
      const result = await graphqlAddComment(accessToken + "x", postId);

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });

  describe("remove comment", () => {
    test("existing comment", async () => {
      const addComment = await graphqlAddComment(accessToken, postId);
      expect(addComment.data?.addComment.comment).toMatchObject({
        body: "test body",
      });

      const result = await graphqlDeleteComment(
        accessToken,
        addComment.data?.addComment.comment.id
      );

      expect(result.errors).toBeUndefined();
      expect(result.data?.deleteComment).toBe(true);
    });

    test("whole post", async () => {
      const addComment = await graphqlAddComment(accessToken, postId);
      expect(addComment.data?.addComment.comment).toMatchObject({
        body: "test body",
      });

      const addCommentId = addComment.data?.addComment.comment.id;

      const result = await graphqlDeletePost(accessToken, postId);

      expect(result.errors).toBeUndefined();
      expect(result.data?.deletePost).toBe(true);

      const deletedComment = await prisma.comment.findUnique({
        where: { id: addCommentId },
      });
      expect(deletedComment).toBeNull();
    });

    test("non existing comment", async () => {
      const result = await graphqlDeleteComment(accessToken, -1);

      expect(JSON.stringify(result.errors)).toMatch("could not find comment");
      expect(result.data).toBeNull();
    });

    test("different author", async () => {
      const addComment = await graphqlAddComment(accessToken, postId);
      expect(addComment.data?.addComment.comment).toMatchObject({
        body: "test body",
      });

      const register = await graphqlRegister("bob@drip.pl");
      expect(register.data?.register.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const login = await graphqlLogin("bob@drip.pl");
      expect(login.data?.login.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const newAccessToken = login.data?.login.accessToken;

      const result = await graphqlDeleteComment(
        newAccessToken,
        addComment.data?.addComment.comment.id
      );

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch(
        "comment has different author"
      );
    });

    test("not authenticated", async () => {
      const addComment = await graphqlAddComment(accessToken, postId);
      expect(addComment.data?.addComment.comment).toMatchObject({
        body: "test body",
      });

      const result = await graphqlDeleteComment(
        accessToken + "x",
        addComment.data?.addComment.comment.id
      );

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });
});
