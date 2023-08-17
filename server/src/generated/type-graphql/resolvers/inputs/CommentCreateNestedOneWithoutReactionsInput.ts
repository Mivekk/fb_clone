import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutReactionsInput } from "../inputs/CommentCreateOrConnectWithoutReactionsInput";
import { CommentCreateWithoutReactionsInput } from "../inputs/CommentCreateWithoutReactionsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutReactionsInput", {})
export class CommentCreateNestedOneWithoutReactionsInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput, {
    nullable: true
  })
  create?: CommentCreateWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutReactionsInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}
