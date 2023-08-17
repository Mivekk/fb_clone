import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionTypeWithAggregatesFilter } from "../inputs/EnumReactionTypeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ReactionScalarWhereWithAggregatesInput", {})
export class ReactionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  authorId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumReactionTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  commentId?: IntNullableWithAggregatesFilter | undefined;
}
