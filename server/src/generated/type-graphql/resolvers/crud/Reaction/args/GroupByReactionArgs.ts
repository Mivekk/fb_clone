import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOrderByWithAggregationInput } from "../../../inputs/ReactionOrderByWithAggregationInput";
import { ReactionScalarWhereWithAggregatesInput } from "../../../inputs/ReactionScalarWhereWithAggregatesInput";
import { ReactionWhereInput } from "../../../inputs/ReactionWhereInput";
import { ReactionScalarFieldEnum } from "../../../../enums/ReactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReactionArgs {
  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  where?: ReactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReactionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "authorId" | "value" | "postId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ReactionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReactionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
