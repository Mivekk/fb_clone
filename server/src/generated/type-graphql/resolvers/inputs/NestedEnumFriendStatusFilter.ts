import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("NestedEnumFriendStatusFilter", {})
export class NestedEnumFriendStatusFilter {
  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  equals?: "INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS" | undefined;

  @TypeGraphQL.Field(_type => [FriendStatus], {
    nullable: true
  })
  in?: Array<"INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS"> | undefined;

  @TypeGraphQL.Field(_type => [FriendStatus], {
    nullable: true
  })
  notIn?: Array<"INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFriendStatusFilter, {
    nullable: true
  })
  not?: NestedEnumFriendStatusFilter | undefined;
}
