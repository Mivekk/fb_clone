import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionTypeFilter } from "../inputs/EnumReactionTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("ReactionScalarWhereInput", {})
export class ReactionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true
  })
  AND?: ReactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true
  })
  OR?: ReactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true
  })
  NOT?: ReactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  authorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionTypeFilter, {
    nullable: true
  })
  type?: EnumReactionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  commentId?: IntNullableFilter | undefined;
}
