import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("ReactionCreateWithoutAuthorInput", {})
export class ReactionCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: false
  })
  type!: "LIKE" | "DISLIKE";

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutReactionsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutReactionsInput;
}
