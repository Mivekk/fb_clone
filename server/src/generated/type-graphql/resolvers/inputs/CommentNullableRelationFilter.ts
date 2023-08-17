import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType("CommentNullableRelationFilter", {})
export class CommentNullableRelationFilter {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  is?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  isNot?: CommentWhereInput | undefined;
}
