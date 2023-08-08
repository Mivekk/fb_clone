import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutAuthorInput } from "../inputs/ReactionCreateWithoutAuthorInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateOrConnectWithoutAuthorInput", {})
export class ReactionCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ReactionCreateWithoutAuthorInput;
}
