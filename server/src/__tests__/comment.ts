import "reflect-metadata";

import {
  graphqlAddComment,
  graphqlCreatePost,
  graphqlDeleteComment,
  graphqlDeletePost,
  graphqlLogin,
  graphqlRegister,
} from "../test-utils/graphqlFunctions";
import prisma from "../client";
import { graphqlWrapper } from "../test-utils/graphqlWrapper";
import { addCommentMutation } from "../test-utils/queries";

describe("comment", () => {
  let accessToken = "";
  let postId = 1;
  beforeEach(async () => {
    const users = prisma.user.deleteMany();
    const posts = prisma.post.deleteMany();
    const comments = prisma.comment.deleteMany();
    const reactions = prisma.reaction.deleteMany();

    await prisma.$transaction([reactions, comments, posts, users]);

    const register = await graphqlRegister();

    expect(register.data?.register.user).toMatchObject({
      email: "rich@drip.pl",
    });

    const login = await graphqlLogin();

    expect(login.data?.login.user).toMatchObject({
      email: "rich@drip.pl",
    });

    expect(login.data?.login.accessToken).not.toBeNull();
    accessToken = login.data?.login.accessToken;

    const post = await graphqlCreatePost(accessToken);

    expect(post.data?.createPost.post).toMatchObject({
      title: "test title",
      body: "test body",
    });
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

      const result = await graphqlDeletePost(accessToken, postId);

      expect(result.errors).toBeUndefined();
      expect(result.data?.deletePost).toBe(true);
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

      const register: any = await graphqlRegister("bob@drip.pl");
      expect(register.data?.register.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const login: any = await graphqlLogin("bob@drip.pl");
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
