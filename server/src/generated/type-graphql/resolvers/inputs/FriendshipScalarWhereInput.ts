import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFriendStatusFilter } from "../inputs/EnumFriendStatusFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("FriendshipScalarWhereInput", {})
export class FriendshipScalarWhereInput {
  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  AND?: FriendshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  OR?: FriendshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  NOT?: FriendshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  senderId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  receiverId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFriendStatusFilter, {
    nullable: true
  })
  status?: EnumFriendStatusFilter | undefined;
}
