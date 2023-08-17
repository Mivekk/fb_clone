import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCountReactionsArgs } from "./args/CommentCountReactionsArgs";
import { CommentCountRepliesArgs } from "./args/CommentCountRepliesArgs";

@TypeGraphQL.ObjectType("CommentCount", {
  simpleResolvers: true
})
export class CommentCount {
  reactions!: number;
  replies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reactions",
    nullable: false
  })
  getReactions(@TypeGraphQL.Root() root: CommentCount, @TypeGraphQL.Args() args: CommentCountReactionsArgs): number {
    return root.reactions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "replies",
    nullable: false
  })
  getReplies(@TypeGraphQL.Root() root: CommentCount, @TypeGraphQL.Args() args: CommentCountRepliesArgs): number {
    return root.replies;
  }
}
