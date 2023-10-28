import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFriendshipsInput } from "../inputs/UserCreateNestedOneWithoutFriendshipsInput";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.InputType("FriendshipCreateWithoutReceiverInput", {})
export class FriendshipCreateWithoutReceiverInput {
  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: false
  })
  status!: "INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFriendshipsInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutFriendshipsInput;
}
