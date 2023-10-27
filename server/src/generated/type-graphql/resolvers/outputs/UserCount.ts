import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountFriendsArgs } from "./args/UserCountFriendsArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
import { UserCountPrisma_friendsArgs } from "./args/UserCountPrisma_friendsArgs";
import { UserCountReactionsArgs } from "./args/UserCountReactionsArgs";

@TypeGraphQL.ObjectType("UserCount", {
  simpleResolvers: true
})
export class UserCount {
  posts!: number;
  comments!: number;
  reactions!: number;
  friends!: number;
  prisma_friends!: number;

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
    name: "friends",
    nullable: false
  })
  getFriends(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountFriendsArgs): number {
    return root.friends;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "prisma_friends",
    nullable: false
  })
  getPrisma_friends(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPrisma_friendsArgs): number {
    return root.prisma_friends;
  }
}
