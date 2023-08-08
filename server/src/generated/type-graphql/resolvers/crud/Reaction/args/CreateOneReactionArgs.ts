import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionCreateInput } from "../../../inputs/ReactionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneReactionArgs {
  @TypeGraphQL.Field(_type => ReactionCreateInput, {
    nullable: false
  })
  data!: ReactionCreateInput;
}
