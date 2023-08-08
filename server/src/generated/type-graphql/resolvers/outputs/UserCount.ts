import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
import { UserCountReactionsArgs } from "./args/UserCountReactionsArgs";

@TypeGraphQL.ObjectType("UserCount", {
  simpleResolvers: true
})
export class UserCount {
  posts!: number;
  comments!: number;
  reactions!: number;

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
}
