import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFriendStatusFilter } from "../inputs/EnumFriendStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FriendshipWhereInput", {})
export class FriendshipWhereInput {
  @TypeGraphQL.Field(_type => [FriendshipWhereInput], {
    nullable: true
  })
  AND?: FriendshipWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereInput], {
    nullable: true
  })
  OR?: FriendshipWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereInput], {
    nullable: true
  })
  NOT?: FriendshipWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  first_user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFriendStatusFilter, {
    nullable: true
  })
  status?: EnumFriendStatusFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  first_user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  second_user?: UserRelationFilter | undefined;
}
