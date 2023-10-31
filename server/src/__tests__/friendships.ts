import "reflect-metadata";
import {
  clearDatabase,
  graphqlAcceptFriend,
  graphqlAddFriend,
  graphqlFriendStatus,
  graphqlLogin,
  graphqlRegister,
} from "../test-utils/functions";

describe("friendships", () => {
  let accessToken: string;
  let userAccessToken: string;

  let firstUserId: number;
  let secondUserId: number;
  beforeEach(async () => {
    await clearDatabase();

    await graphqlRegister();
    const login = await graphqlLogin();
    accessToken = login.data?.login.accessToken;
    firstUserId = login.data?.login.user.id;

    await graphqlRegister("user@user.pl");
    const userLogin = await graphqlLogin("user@user.pl");
    userAccessToken = userLogin.data?.login.accessToken;
    secondUserId = userLogin.data?.login.user.id;
  });

  describe("add friend", () => {
    test("new friend", async () => {
      const result = await graphqlAddFriend(accessToken, secondUserId);

      expect(result.data?.addFriend).toBe("INVITE_SENT");
      expect(result.errors).toBeUndefined();
    });

    test("already sent invite", async () => {
      const addFriend = await graphqlAddFriend(accessToken, secondUserId);
      expect(addFriend.data?.addFriend).toBe("INVITE_SENT");
      expect(addFriend.errors).toBeUndefined();

      const result = await graphqlAddFriend(accessToken, secondUserId);
      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch(
        "already established relation"
      );
    });

    test("not authenticated", async () => {
      const result = await graphqlAddFriend(accessToken + "x", secondUserId);

      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });

  describe("accept friend", () => {
    test("new invite", async () => {
      const addFriend = await graphqlAddFriend(accessToken, secondUserId);
      expect(addFriend.data?.addFriend).toBe("INVITE_SENT");

      const result = await graphqlAcceptFriend(userAccessToken, firstUserId);
      expect(result.data?.acceptFriend).toBe("FRIENDS");
      expect(result.errors).toBeUndefined();
    });

    test("not invited", async () => {
      const result = await graphqlAcceptFriend(userAccessToken, firstUserId);
      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("incorrect relation");
    });

    test("not authenticated", async () => {
      const addFriend = await graphqlAddFriend(accessToken, secondUserId);
      expect(addFriend.data?.addFriend).toBe("INVITE_SENT");

      const result = await graphqlAcceptFriend(
        userAccessToken + "x",
        firstUserId
      );
      expect(result.data).toBeNull();
      expect(JSON.stringify(result.errors)).toMatch("not authenticated");
    });
  });

  describe("friend status", () => {
    test("no relation", async () => {
      const result = await graphqlFriendStatus(accessToken, secondUserId);
      expect(result.data?.friendStatus).toBeNull();
      expect(result.errors).toBeUndefined();
    });

    test("invite sent", async () => {
      const addFriend = await graphqlAddFriend(accessToken, secondUserId);
      expect(addFriend.data?.addFriend).toBe("INVITE_SENT");

      const result = await graphqlFriendStatus(accessToken, secondUserId);
      expect(result.data?.friendStatus).toBe("INVITE_SENT");
      expect(result.errors).toBeUndefined();
    });

    test("invite received", async () => {
      const addFriend = await graphqlAddFriend(accessToken, secondUserId);
      expect(addFriend.data?.addFriend).toBe("INVITE_SENT");

      const result = await graphqlFriendStatus(userAccessToken, firstUserId);
      expect(result.data?.friendStatus).toBe("INVITE_RECEIVED");
      expect(result.errors).toBeUndefined();
    });

    test("friends", async () => {
      const addFriend = await graphqlAddFriend(accessToken, secondUserId);
      expect(addFriend.data?.addFriend).toBe("INVITE_SENT");

      const acceptFriend = await graphqlAcceptFriend(
        userAccessToken,
        firstUserId
      );
      expect(acceptFriend.data?.acceptFriend).toBe("FRIENDS");

      const result = await graphqlFriendStatus(accessToken, secondUserId);
      expect(result.data?.friendStatus).toBe("FRIENDS");
      expect(result.errors).toBeUndefined();
    });
  });
});
