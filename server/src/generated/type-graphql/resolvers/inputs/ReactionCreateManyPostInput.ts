import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("ReactionCreateManyPostInput", {})
export class ReactionCreateManyPostInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: false
  })
  type!: "LIKE" | "DISLIKE";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commentId?: number | undefined;
}
