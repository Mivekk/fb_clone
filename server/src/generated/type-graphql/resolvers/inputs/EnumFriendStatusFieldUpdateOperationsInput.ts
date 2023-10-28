import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("EnumFriendStatusFieldUpdateOperationsInput", {})
export class EnumFriendStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  set?: "INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS" | undefined;
}
