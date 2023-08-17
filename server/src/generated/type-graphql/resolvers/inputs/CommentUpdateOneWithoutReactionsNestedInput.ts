import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutReactionsInput } from "../inputs/CommentCreateOrConnectWithoutReactionsInput";
import { CommentCreateWithoutReactionsInput } from "../inputs/CommentCreateWithoutReactionsInput";
import { CommentUpdateToOneWithWhereWithoutReactionsInput } from "../inputs/CommentUpdateToOneWithWhereWithoutReactionsInput";
import { CommentUpsertWithoutReactionsInput } from "../inputs/CommentUpsertWithoutReactionsInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneWithoutReactionsNestedInput", {})
export class CommentUpdateOneWithoutReactionsNestedInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput, {
    nullable: true
  })
  create?: CommentCreateWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutReactionsInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutReactionsInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  disconnect?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  delete?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateToOneWithWhereWithoutReactionsInput, {
    nullable: true
  })
  update?: CommentUpdateToOneWithWhereWithoutReactionsInput | undefined;
}
