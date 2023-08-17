import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutReactionsInput } from "../inputs/CommentCreateWithoutReactionsInput";
import { CommentUpdateWithoutReactionsInput } from "../inputs/CommentUpdateWithoutReactionsInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType("CommentUpsertWithoutReactionsInput", {})
export class CommentUpsertWithoutReactionsInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutReactionsInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;
}
