import { buildSchema } from "type-graphql";
import { RedisPubSub } from "graphql-redis-subscriptions";

import pubSub from "./pubsub";
import { resolvers } from "./generated/type-graphql";
import { UserResolver } from "./resolvers/User";
import { PostResolver } from "./resolvers/Post";
import { CommentResolver } from "./resolvers/Comment";
import { ReactionResolver } from "./resolvers/Reaction";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [
      ...resolvers,
      UserResolver,
      PostResolver,
      CommentResolver,
      ReactionResolver,
    ],
    validate: false,
    pubSub,
  });
};
