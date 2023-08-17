import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutReactionsInput } from "../inputs/CommentCreateNestedOneWithoutReactionsInput";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("ReactionCreateWithoutPostInput", {})
export class ReactionCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: false
  })
  type!: "LIKE" | "DISLIKE";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutReactionsInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutReactionsInput, {
    nullable: true
  })
  comment?: CommentCreateNestedOneWithoutReactionsInput | undefined;
}
