import * as TypeGraphQL from "type-graphql";

export enum FriendshipScalarFieldEnum {
  senderId = "senderId",
  receiverId = "receiverId",
  status = "status"
}
TypeGraphQL.registerEnumType(FriendshipScalarFieldEnum, {
  name: "FriendshipScalarFieldEnum",
  description: undefined,
});
