import "reflect-metadata";

import prisma from "../client";
import {
  loginMutation,
  meQuery,
  registerMutation,
} from "../test-utils/queries";
import { graphqlWrapper } from "../test-utils/graphqlWrapper";
import { graphqlLogin, graphqlRegister } from "../test-utils/graphqlFunctions";

describe("user", () => {
  beforeEach(async () => {
    const users = prisma.user.deleteMany();
    const posts = prisma.post.deleteMany();

    await prisma.$transaction([posts, users]);
  });

  describe("register", () => {
    test("new user", async () => {
      const result: any = await graphqlRegister();

      expect(result.data?.register.user).toMatchObject({
        firstName: "Rich",
        lastName: "Drip",
        email: "rich@drip.pl",
      });

      const users = await prisma.user.count();

      expect(users).toBe(1);
      expect(result.errors).toBeUndefined();
      expect(result.data?.register.error).toBeNull();
    });

    test("user already exists", async () => {
      const register: any = await graphqlRegister();

      expect(register.data?.register.user).toMatchObject({
        email: "rich@drip.pl",
      });

      const result: any = await graphqlRegister();

      const users = await prisma.user.count();

      expect(users).toBe(1);
      expect(result.data?.register.user).toBeNull();
      expect(result.data?.register.error).toBe("user already exists");
      expect(result.errors).toBeUndefined();
    });

    test("invalid name", async () => {
      const result: any = await graphqlWrapper({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: "",
            lastName: "Drip",
            email: "rich@drip.pl",
            password: "richdrip",
          },
        },
      });

      const users = await prisma.user.count();

      expect(users).toBe(0);
      expect(result.data?.register.user).toBeNull();
      expect(result.data?.register.error).toBe("invalid name");
      expect(result.errors).toBeUndefined();
    });

    test("incorrect email", async () => {
      const result: any = await graphqlWrapper({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: "Rich",
            lastName: "Drip",
            email: "richdrip.pl",
            password: "richdrip",
          },
        },
      });

      const users = await prisma.user.count();

      expect(users).toBe(0);
      expect(result.data?.register.user).toBeNull();
      expect(result.data?.register.error).toBe("incorrect email");
      expect(result.errors).toBeUndefined();
    });

    test("invalid password", async () => {
      const result: any = await graphqlWrapper({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: "Rich",
            lastName: "Drip",
            email: "rich@drip.pl",
            password: "ric",
          },
        },
      });

      const users = await prisma.user.count();

      expect(users).toBe(0);
      expect(result.data?.register.user).toBeNull();
      expect(result.data?.register.error).toBe("invalid password");
      expect(result.errors).toBeUndefined();
    });
  });

  describe("login", () => {
    test("existing account", async () => {
      const register: any = await graphqlRegister();

      expect(register.data?.register.user).toMatchObject({
        email: "rich@drip.pl",
      });

      const result: any = await graphqlLogin();

      expect(result.data?.login.user).toMatchObject({
        email: "rich@drip.pl",
      });

      expect(result.data?.login.accessToken).not.toBeNull();
      expect(result.data?.login.error).toBeNull();
      expect(result.errors).toBeUndefined();
    });

    test("user does not exist", async () => {
      const result: any = await graphqlWrapper({
        source: loginMutation,
        variableValues: {
          data: {
            email: "ric@drip.pl",
            password: "richdrip",
          },
        },
      });

      expect(result.data?.login.accessToken).toBeNull();
      expect(result.data?.login.user).toBeNull();
      expect(result.data?.login.error).toBe("user does not exist");
      expect(result.errors).toBeUndefined();
    });

    test("incorrect password", async () => {
      const register: any = await graphqlRegister();

      expect(register.data?.register.user).toMatchObject({
        email: "rich@drip.pl",
      });

      const result: any = await graphqlWrapper({
        source: loginMutation,
        variableValues: {
          data: {
            email: "rich@drip.pl",
            password: "ricdrip",
          },
        },
      });

      expect(result.data?.login.accessToken).toBeNull();
      expect(result.data?.login.user).toBeNull();
      expect(result.data?.login.error).toBe("incorrect password");
      expect(result.errors).toBeUndefined();
    });
  });

  describe("me", () => {
    test("login and execute me", async () => {
      const register: any = await graphqlRegister();

      expect(register.data?.register.user).toMatchObject({
        email: "rich@drip.pl",
      });

      const login: any = await graphqlLogin();

      expect(login.data?.login.user).toMatchObject({
        email: "rich@drip.pl",
      });

      expect(login.data?.login.accessToken).not.toBeNull();
      const accessToken = login.data?.login.accessToken;

      const result: any = await graphqlWrapper({
        source: meQuery,
        contextValue: {
          req: {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        },
      });

      expect(result.data?.me.email).toBe("rich@drip.pl");
      expect(result.errors).toBeUndefined();
    });

    test("not authenticated", async () => {
      const register: any = await graphqlRegister();

      expect(register.data?.register.user).toMatchObject({
        email: "rich@drip.pl",
      });

      const login: any = await graphqlLogin();

      expect(login.data?.login.user).toMatchObject({
        email: "rich@drip.pl",
      });

      expect(login.data?.login.accessToken).not.toBeNull();
      const accessToken = login.data?.login.accessToken;

      const result: any = await graphqlWrapper({
        source: meQuery,
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
