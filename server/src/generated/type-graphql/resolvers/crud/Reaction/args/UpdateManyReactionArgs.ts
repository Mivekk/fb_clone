import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionUpdateManyMutationInput } from "../../../inputs/ReactionUpdateManyMutationInput";
import { ReactionWhereInput } from "../../../inputs/ReactionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReactionArgs {
  @TypeGraphQL.Field(_type => ReactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  where?: ReactionWhereInput | undefined;
}
