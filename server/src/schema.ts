import { buildSchema } from "type-graphql";

import pubSub from "./pubsub";
import { resolvers } from "./generated/type-graphql";
import { UserResolver } from "./resolvers/User";
import { PostResolver } from "./resolvers/Post";
import { CommentResolver } from "./resolvers/Comment";
import { ReactionResolver } from "./resolvers/Reaction";
import { FriendshipResolver } from "./resolvers/Friendship";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [
      ...resolvers,
      UserResolver,
      PostResolver,
      CommentResolver,
      ReactionResolver,
      FriendshipResolver,
    ],
    validate: false,
    pubSub,
  });
};
