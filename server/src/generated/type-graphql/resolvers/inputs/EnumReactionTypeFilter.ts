import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReactionTypeFilter } from "../inputs/NestedEnumReactionTypeFilter";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("EnumReactionTypeFilter", {})
export class EnumReactionTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumReactionTypeFilter, {
    nullable: true
  })
  not?: NestedEnumReactionTypeFilter | undefined;
}
