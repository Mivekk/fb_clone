import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";
import { PostCountLikesArgs } from "./args/PostCountLikesArgs";

@TypeGraphQL.ObjectType("PostCount", {
  simpleResolvers: true
})
export class PostCount {
  comments!: number;
  likes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "comments",
    nullable: false
  })
  getComments(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likes",
    nullable: false
  })
  getLikes(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountLikesArgs): number {
    return root.likes;
  }
}
