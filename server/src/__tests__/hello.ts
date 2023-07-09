import "reflect-metadata";
import { buildSchema } from "type-graphql";
import prisma from "../client";
import { resolvers } from "../generated/type-graphql";
import { UserResolver } from "../resolvers/User";
import { PostResolver } from "../resolvers/Post";
import { CommentResolver } from "../resolvers/Comment";
import { GraphQLSchema, graphql } from "graphql";

const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(data: $data) {
    user {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
    error
  }
}`;

afterAll(async () => {
  const deleteUser = prisma.user.deleteMany();
  const deletePost = prisma.post.deleteMany();
  const deleteComment = prisma.comment.deleteMany();

  await prisma.$transaction([deleteUser, deletePost, deleteComment]);

  await prisma.$disconnect();
});

describe("user", () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await buildSchema({
      resolvers: [...resolvers, UserResolver, PostResolver, CommentResolver],
      validate: false,
    });
  });

  test("should create a new user", async () => {
    const result: any = await graphql({
      schema,
      source: registerMutation,
      variableValues: {
        data: {
          firstName: "Rich",
          lastName: "Drip",
          email: "rich@drip.pl",
          password: "richdrip",
        },
      },
      contextValue: { prisma },
    });

    expect(result.data?.register.user).toMatchObject({
      firstName: "Rich",
      lastName: "Drip",
      email: "rich@drip.pl",
    });
  });
});
