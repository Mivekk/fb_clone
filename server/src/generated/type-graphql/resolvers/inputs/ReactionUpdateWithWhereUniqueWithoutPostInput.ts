import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionUpdateWithoutPostInput } from "../inputs/ReactionUpdateWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutPostInput", {})
export class ReactionUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutPostInput, {
    nullable: false
  })
  data!: ReactionUpdateWithoutPostInput;
}
