import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReactionTypeFilter } from "../inputs/NestedEnumReactionTypeFilter";
import { NestedEnumReactionTypeWithAggregatesFilter } from "../inputs/NestedEnumReactionTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("EnumReactionTypeWithAggregatesFilter", {})
export class EnumReactionTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: true
  })
  equals?: "LIKE" | "DISLIKE" | undefined;

  @TypeGraphQL.Field(_type => [ReactionType], {
    nullable: true
  })
  in?: Array<"LIKE" | "DISLIKE"> | undefined;

  @TypeGraphQL.Field(_type => [ReactionType], {
    nullable: true
  })
  notIn?: Array<"LIKE" | "DISLIKE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumReactionTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumReactionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumReactionTypeFilter | undefined;
}
