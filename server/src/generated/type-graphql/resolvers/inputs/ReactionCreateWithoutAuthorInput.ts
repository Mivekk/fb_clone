import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";

@TypeGraphQL.InputType("ReactionCreateWithoutAuthorInput", {})
export class ReactionCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutReactionsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutReactionsInput;
}
