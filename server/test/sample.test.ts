import { expect, test, vi } from "vitest";
import prismaMock from "../src/libs/__mocks__/prisma";
import prisma from "../src/libs/prisma";

vi.mock("../src/libs/prisma");

test("create user", async () => {
  const newUser = {
    firstName: "bob",
    lastName: "bob",
    email: "bob@bob.pl",
    password: "bob",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  prismaMock.user.create.mockResolvedValue({ ...newUser, id: 1 });

  const user = await prisma.user.create({
    data: newUser,
  });

  expect(user).toStrictEqual({ ...newUser, id: 1 });
});
