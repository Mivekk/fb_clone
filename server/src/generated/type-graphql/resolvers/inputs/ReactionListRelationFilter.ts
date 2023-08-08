import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionWhereInput } from "../inputs/ReactionWhereInput";

@TypeGraphQL.InputType("ReactionListRelationFilter", {})
export class ReactionListRelationFilter {
  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  every?: ReactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  some?: ReactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  none?: ReactionWhereInput | undefined;
}
