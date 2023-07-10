import { buildSchema } from "type-graphql";
import { resolvers } from "./generated/type-graphql";
import { UserResolver } from "./resolvers/User";
import { PostResolver } from "./resolvers/Post";
import { CommentResolver } from "./resolvers/Comment";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [...resolvers, UserResolver, PostResolver, CommentResolver],
    validate: false,
  });
};
