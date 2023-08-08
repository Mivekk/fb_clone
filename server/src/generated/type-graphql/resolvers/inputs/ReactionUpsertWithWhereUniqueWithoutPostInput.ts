import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutPostInput } from "../inputs/ReactionCreateWithoutPostInput";
import { ReactionUpdateWithoutPostInput } from "../inputs/ReactionUpdateWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutPostInput", {})
export class ReactionUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutPostInput, {
    nullable: false
  })
  update!: ReactionUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutPostInput, {
    nullable: false
  })
  create!: ReactionCreateWithoutPostInput;
}
