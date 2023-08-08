import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionAvgOrderByAggregateInput } from "../inputs/ReactionAvgOrderByAggregateInput";
import { ReactionCountOrderByAggregateInput } from "../inputs/ReactionCountOrderByAggregateInput";
import { ReactionMaxOrderByAggregateInput } from "../inputs/ReactionMaxOrderByAggregateInput";
import { ReactionMinOrderByAggregateInput } from "../inputs/ReactionMinOrderByAggregateInput";
import { ReactionSumOrderByAggregateInput } from "../inputs/ReactionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReactionOrderByWithAggregationInput", {})
export class ReactionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReactionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReactionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReactionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReactionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReactionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReactionSumOrderByAggregateInput | undefined;
}
