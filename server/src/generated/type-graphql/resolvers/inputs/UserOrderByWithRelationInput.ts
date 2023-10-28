import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { FriendshipOrderByRelationAggregateInput } from "../inputs/FriendshipOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  image_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tokenVersion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput, {
    nullable: true
  })
  reactions?: ReactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  friendships?: FriendshipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  prisma_friendships?: FriendshipOrderByRelationAggregateInput | undefined;
}
