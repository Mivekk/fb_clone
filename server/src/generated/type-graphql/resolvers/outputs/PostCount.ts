import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";
import { PostCountReactionsArgs } from "./args/PostCountReactionsArgs";

@TypeGraphQL.ObjectType("PostCount", {
  simpleResolvers: true
})
export class PostCount {
  comments!: number;
  reactions!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "comments",
    nullable: false
  })
  getComments(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reactions",
    nullable: false
  })
  getReactions(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountReactionsArgs): number {
    return root.reactions;
  }
}
