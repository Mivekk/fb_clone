import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipAvgOrderByAggregateInput } from "../inputs/FriendshipAvgOrderByAggregateInput";
import { FriendshipCountOrderByAggregateInput } from "../inputs/FriendshipCountOrderByAggregateInput";
import { FriendshipMaxOrderByAggregateInput } from "../inputs/FriendshipMaxOrderByAggregateInput";
import { FriendshipMinOrderByAggregateInput } from "../inputs/FriendshipMinOrderByAggregateInput";
import { FriendshipSumOrderByAggregateInput } from "../inputs/FriendshipSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FriendshipOrderByWithAggregationInput", {})
export class FriendshipOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  receiverId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FriendshipCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FriendshipCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FriendshipAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FriendshipMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FriendshipMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FriendshipSumOrderByAggregateInput | undefined;
}
