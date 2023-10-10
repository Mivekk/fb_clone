import "reflect-metadata";

import {
  clearDatabase,
  graphqlAddReaction,
  graphqlCreatePost,
  graphqlLogin,
  graphqlRegister,
  graphqlDeletePost,
} from "../test-utils/functions";
import { ReactionType } from "../generated/type-graphql";
import { graphqlWrapper } from "../test-utils/graphqlWrapper";
import { addReactionMutation } from "../test-utils/queries";
import prisma from "../client";

describe("reaction", () => {
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

  describe("add reaction", () => {
    test("new like", async () => {
      const result = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.LIKE
      );

      expect(result.errors).toBeUndefined();
      expect(result.data?.addReaction).toMatchObject({
        postId,
        type: ReactionType.LIKE,
      });
    });

    test("new dislike", async () => {
      const result = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.DISLIKE
      );

      expect(result.errors).toBeUndefined();
      expect(result.data?.addReaction).toMatchObject({
        postId,
        type: ReactionType.DISLIKE,
      });
    });

    test("invalid type", async () => {
      const result: any = await graphqlWrapper({
        source: addReactionMutation,
        variableValues: {
          data: {
            postId,
            type: "LIKEY",
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

      expect(result.data).toBeUndefined();
      expect(JSON.stringify(result.errors)).toMatch("invalid value");
    });

    test("not authenticated", async () => {
      const result = await graphqlAddReaction(
        accessToken + "x",
        postId,
        ReactionType.LIKE
      );

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });

  describe("update reaction", () => {
    test("from like to dislike", async () => {
      const reactionCount = await prisma.reaction.count({ where: { postId } });

      const addReaction = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.LIKE
      );
      expect(addReaction.errors).toBeUndefined();
      expect(addReaction.data?.addReaction).toMatchObject({
        type: ReactionType.LIKE,
        postId,
      });

      const result = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.DISLIKE
      );

      const reactions = await prisma.reaction.count({ where: { postId } });

      expect(reactions).toBe(reactionCount + 1);
      expect(result.errors).toBeUndefined();
      expect(result.data?.addReaction).toMatchObject({
        type: ReactionType.DISLIKE,
        postId,
      });
    });

    test("from dislike to like", async () => {
      const reactionCount = await prisma.reaction.count({ where: { postId } });

      const addReaction = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.DISLIKE
      );
      expect(addReaction.errors).toBeUndefined();
      expect(addReaction.data?.addReaction).toMatchObject({
        type: ReactionType.DISLIKE,
        postId,
      });

      const result = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.LIKE
      );

      const reactions = await prisma.reaction.count({ where: { postId } });

      expect(reactions).toBe(reactionCount + 1);
      expect(result.errors).toBeUndefined();
      expect(result.data?.addReaction).toMatchObject({
        type: ReactionType.LIKE,
        postId,
      });
    });

    test("from like to invalid", async () => {
      const reactionCount = await prisma.reaction.count({ where: { postId } });

      const addReaction = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.LIKE
      );
      expect(addReaction.errors).toBeUndefined();
      expect(addReaction.data?.addReaction).toMatchObject({
        type: ReactionType.LIKE,
        postId,
      });

      const result: any = await graphqlWrapper({
        source: addReactionMutation,
        variableValues: {
          data: {
            postId,
            type: "LIKEY",
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

      const reactions = await prisma.reaction.count({ where: { postId } });

      expect(reactions).toBe(reactionCount + 1);
      expect(result.data).toBeUndefined();
      expect(JSON.stringify(result.errors)).toMatch("invalid value");
    });

    test("different like author", async () => {
      const reactionCount = await prisma.reaction.count({ where: { postId } });

      const addReaction = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.LIKE
      );
      expect(addReaction.errors).toBeUndefined();
      expect(addReaction.data?.addReaction).toMatchObject({
        type: ReactionType.LIKE,
        postId,
      });

      const register = await graphqlRegister("bob@drip.pl");
      expect(register.data?.register.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const login = await graphqlLogin("bob@drip.pl");
      const newAccessToken = login.data?.login.accessToken;
      expect(login.data?.login.user).toMatchObject({
        email: "bob@drip.pl",
      });

      const result: any = await graphqlWrapper({
        source: addReactionMutation,
        variableValues: {
          data: {
            postId,
            type: ReactionType.LIKE,
          },
        },
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${newAccessToken}`,
            },
          },
        },
      });
      expect(result.errors).toBeUndefined();
      expect(result.data?.addReaction).toMatchObject({
        type: ReactionType.LIKE,
        postId,
      });

      const reactions = await prisma.reaction.count({ where: { postId } });

      expect(reactions).toBe(reactionCount + 2);
    });

    test("not authenticated", async () => {
      const result: any = await graphqlWrapper({
        source: addReactionMutation,
        variableValues: {
          data: {
            postId,
            type: ReactionType.LIKE,
          },
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

  describe("remove reaction", () => {
    test("whole post", async () => {
      const addReaction = await graphqlAddReaction(
        accessToken,
        postId,
        ReactionType.LIKE
      );
      expect(addReaction.data?.addReaction).toMatchObject({
        type: ReactionType.LIKE,
        postId,
      });

      const reactId = addReaction.data?.addReaction.id;

      const result = await graphqlDeletePost(accessToken, postId);
      expect(result.errors).toBeUndefined();
      expect(result.data?.deletePost).toBe(true);

      const deletedReaction = await prisma.reaction.findUnique({
        where: { id: reactId },
      });
      expect(deletedReaction).toBeNull();
    });
  });
});
