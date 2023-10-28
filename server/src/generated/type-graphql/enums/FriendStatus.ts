import * as TypeGraphQL from "type-graphql";

export enum FriendStatus {
  INVITE_SENT = "INVITE_SENT",
  INVITE_RECEIVED = "INVITE_RECEIVED",
  FRIENDS = "FRIENDS"
}
TypeGraphQL.registerEnumType(FriendStatus, {
  name: "FriendStatus",
  description: undefined,
});
