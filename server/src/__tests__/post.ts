import "reflect-metadata";

import prisma from "../client";
import { createPostMutation, deletePostMutation } from "../test-utils/queries";
import { graphqlWrapper } from "../test-utils/graphqlWrapper";
import {
  graphqlCreatePost,
  graphqlLogin,
  graphqlRegister,
} from "../test-utils/graphqlFunctions";

describe("post", () => {
  let accessToken = "";
  beforeEach(async () => {
    const users = prisma.user.deleteMany();
    const posts = prisma.post.deleteMany();

    await prisma.$transaction([posts, users]);

    const register: any = await graphqlRegister();

    expect(register.data?.register.user).toMatchObject({
      email: "rich@drip.pl",
    });

    const login: any = await graphqlLogin();

    expect(login.data?.login.user).toMatchObject({
      email: "rich@drip.pl",
    });

    expect(login.data?.login.accessToken).not.toBeNull();
    accessToken = login.data?.login.accessToken;
  });

  describe("create post", () => {
    test("new post", async () => {
      const result: any = await graphqlCreatePost(accessToken);

      expect(result.data?.createPost.post).toMatchObject({
        title: "test title",
        body: "test body",
      });
      expect(result.data?.createPost.post.comments).toEqual([]);
      expect(result.errors).toBeUndefined();
      expect(result.data?.createPost.error).toBeNull();
    });

    test("empty content", async () => {
      const result: any = await graphqlWrapper({
        source: createPostMutation,
        variableValues: {
          data: {
            title: "",
            body: "a",
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

      expect(result.data?.createPost.post).toBeNull();
      expect(result.errors).toBeUndefined();
      expect(result.data?.createPost.error).toBe("content can not be empty");
    });

    test("not authenticated", async () => {
      const result: any = await graphqlCreatePost(accessToken + "x");

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });

  describe("delete post", () => {
    test("existing post", async () => {
      const createPost: any = await graphqlCreatePost(accessToken);

      expect(createPost.data?.createPost.post).toMatchObject({
        title: "test title",
        body: "test body",
      });

      const result: any = await graphqlWrapper({
        source: deletePostMutation,
        variableValues: {
          postId: createPost.data?.createPost.post.id,
        },
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        },
      });

      expect(result.data?.deletePost).toBe(true);
      expect(result.errors).toBeUndefined();
    });

    test("non existing post", async () => {
      const result: any = await graphqlWrapper({
        source: deletePostMutation,
        variableValues: {
          postId: -1,
        },
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        },
      });

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("post does not exist");
    });

    test("different author", async () => {
      const createPost: any = await graphqlCreatePost(accessToken);

      const register: any = await graphqlRegister("bob@drip.pl");

      expect(register.data?.register.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const login: any = await graphqlLogin("bob@drip.pl");

      expect(login.data?.login.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const newAccessToken = login.data?.login.accessToken;

      const result: any = await graphqlWrapper({
        source: deletePostMutation,
        variableValues: {
          postId: createPost.data?.createPost.post.id,
        },
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${newAccessToken}`,
            },
          },
        },
      });

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch(
        "post has different author"
      );
    });

    test("not authenticated", async () => {
      const createPost: any = await graphqlCreatePost(accessToken);

      const result: any = await graphqlWrapper({
        source: deletePostMutation,
        variableValues: {
          postId: createPost.data?.createPost.post.id,
        },
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${accessToken}x`,
            },
          },
        },
      });

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });
});
