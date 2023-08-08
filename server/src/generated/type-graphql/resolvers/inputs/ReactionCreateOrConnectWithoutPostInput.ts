import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutPostInput } from "../inputs/ReactionCreateWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateOrConnectWithoutPostInput", {})
export class ReactionCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutPostInput, {
    nullable: false
  })
  create!: ReactionCreateWithoutPostInput;
}
