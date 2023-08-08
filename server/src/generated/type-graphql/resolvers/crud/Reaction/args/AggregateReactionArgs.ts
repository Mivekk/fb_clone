import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOrderByWithRelationInput } from "../../../inputs/ReactionOrderByWithRelationInput";
import { ReactionWhereInput } from "../../../inputs/ReactionWhereInput";
import { ReactionWhereUniqueInput } from "../../../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReactionArgs {
  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  where?: ReactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReactionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
