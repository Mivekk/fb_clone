import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFriendStatusWithAggregatesFilter } from "../inputs/EnumFriendStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("FriendshipScalarWhereWithAggregatesInput", {})
export class FriendshipScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FriendshipScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FriendshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FriendshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FriendshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  senderId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  receiverId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFriendStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumFriendStatusWithAggregatesFilter | undefined;
}
