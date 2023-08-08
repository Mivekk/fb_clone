import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyMutationInput } from "../inputs/ReactionUpdateManyMutationInput";

@TypeGraphQL.InputType("ReactionUpdateManyWithWhereWithoutAuthorInput", {})
export class ReactionUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReactionScalarWhereInput, {
    nullable: false
  })
  where!: ReactionScalarWhereInput;

  @TypeGraphQL.Field(_type => ReactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionUpdateManyMutationInput;
}
