import "reflect-metadata";

import {
  clearDatabase,
  graphqlCreatePost,
  graphqlDeletePost,
  graphqlLogin,
  graphqlRegister,
} from "../test-utils/functions";
import { graphqlWrapper } from "../test-utils/graphqlWrapper";
import { createPostMutation } from "../test-utils/queries";

describe("post", () => {
  let accessToken = "";
  beforeEach(async () => {
    await clearDatabase();

    await graphqlRegister();

    const login = await graphqlLogin();
    accessToken = login.data?.login.accessToken;
  });

  describe("create post", () => {
    test("new post", async () => {
      const result = await graphqlCreatePost(accessToken);

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
      const result = await graphqlCreatePost(accessToken + "x");

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });

  describe("delete post", () => {
    test("existing post", async () => {
      const createPost = await graphqlCreatePost(accessToken);

      expect(createPost.data?.createPost.post).toMatchObject({
        title: "test title",
        body: "test body",
      });

      const result = await graphqlDeletePost(
        accessToken,
        createPost.data?.createPost.post.id
      );

      expect(result.data?.deletePost).toBe(true);
      expect(result.errors).toBeUndefined();
    });

    test("non existing post", async () => {
      const result = await graphqlDeletePost(accessToken, -1);

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("post does not exist");
    });

    test("different author", async () => {
      const createPost = await graphqlCreatePost(accessToken);
      expect(createPost.data?.createPost.post).toMatchObject({
        title: "test title",
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

      const result = await graphqlDeletePost(
        newAccessToken,
        createPost.data?.createPost.post.id
      );

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch(
        "post has different author"
      );
    });

    test("not authenticated", async () => {
      const createPost = await graphqlCreatePost(accessToken);
      expect(createPost.data?.createPost.post).toMatchObject({
        title: "test title",
        body: "test body",
      });

      const result = await graphqlDeletePost(
        accessToken + "x",
        createPost.data?.createPost.post.id
      );

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });
});
