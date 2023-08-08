import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("EnumReactionTypeFieldUpdateOperationsInput", {})
export class EnumReactionTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: true
  })
  set?: "LIKE" | "DISLIKE" | undefined;
}
