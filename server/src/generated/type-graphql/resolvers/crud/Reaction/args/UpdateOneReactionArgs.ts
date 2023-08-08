import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionUpdateInput } from "../../../inputs/ReactionUpdateInput";
import { ReactionWhereUniqueInput } from "../../../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReactionArgs {
  @TypeGraphQL.Field(_type => ReactionUpdateInput, {
    nullable: false
  })
  data!: ReactionUpdateInput;

  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;
}
