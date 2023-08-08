import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionUpdateWithoutAuthorInput } from "../inputs/ReactionUpdateWithoutAuthorInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutAuthorInput", {})
export class ReactionUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: ReactionUpdateWithoutAuthorInput;
}
