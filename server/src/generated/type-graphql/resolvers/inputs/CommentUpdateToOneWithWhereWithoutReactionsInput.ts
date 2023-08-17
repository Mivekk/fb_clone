import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutReactionsInput } from "../inputs/CommentUpdateWithoutReactionsInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType("CommentUpdateToOneWithWhereWithoutReactionsInput", {})
export class CommentUpdateToOneWithWhereWithoutReactionsInput {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutReactionsInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutReactionsInput;
}
