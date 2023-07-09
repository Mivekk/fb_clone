import "reflect-metadata";
import { prismaMock } from "../singleton";
import { UserCreateInput } from "../generated/type-graphql";
import prisma from "../client";

describe("user", () => {
  test("should create a new user", async () => {
    const user: UserCreateInput = {
      firstName: "Rich",
      lastName: "Drip",
      email: "rich@drip.pl",
      password: "drip",
    };

    const createdAt = new Date();
    const updatedAt = new Date();

    prismaMock.user.create.mockResolvedValue({
      id: 1,
      firstName: "Rich",
      lastName: "Drip",
      email: "rich@drip.pl",
      createdAt,
      updatedAt,
      password: "drip",
      tokenVersion: 0,
    });

    const createdUser = prisma.user.create({ data: user });

    await expect(createdUser).resolves.toEqual({
      id: 1,
      firstName: "Rich",
      lastName: "Drip",
      email: "rich@drip.pl",
      createdAt,
      updatedAt,
      password: "drip",
      tokenVersion: 0,
    });
  });
});
