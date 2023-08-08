import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";

@TypeGraphQL.InputType("ReactionCreateWithoutPostInput", {})
export class ReactionCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutReactionsInput;
}
