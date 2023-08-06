import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("LikeScalarWhereWithAggregatesInput", {})
export class LikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  value?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;
}
