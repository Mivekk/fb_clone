import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountFriendshipsArgs } from "./args/UserCountFriendshipsArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
import { UserCountPrisma_friendshipsArgs } from "./args/UserCountPrisma_friendshipsArgs";
import { UserCountReactionsArgs } from "./args/UserCountReactionsArgs";

@TypeGraphQL.ObjectType("UserCount", {
  simpleResolvers: true
})
export class UserCount {
  posts!: number;
  comments!: number;
  reactions!: number;
  friendships!: number;
  prisma_friendships!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "comments",
    nullable: false
  })
  getComments(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reactions",
    nullable: false
  })
  getReactions(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountReactionsArgs): number {
    return root.reactions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "friendships",
    nullable: false
  })
  getFriendships(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountFriendshipsArgs): number {
    return root.friendships;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "prisma_friendships",
    nullable: false
  })
  getPrisma_friendships(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPrisma_friendshipsArgs): number {
    return root.prisma_friendships;
  }
}
