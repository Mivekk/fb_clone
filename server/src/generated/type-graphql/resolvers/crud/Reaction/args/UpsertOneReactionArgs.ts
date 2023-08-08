import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionCreateInput } from "../../../inputs/ReactionCreateInput";
import { ReactionUpdateInput } from "../../../inputs/ReactionUpdateInput";
import { ReactionWhereUniqueInput } from "../../../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneReactionArgs {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionCreateInput, {
    nullable: false
  })
  create!: ReactionCreateInput;

  @TypeGraphQL.Field(_type => ReactionUpdateInput, {
    nullable: false
  })
  update!: ReactionUpdateInput;
}
