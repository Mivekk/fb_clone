import * as TypeGraphQL from "type-graphql";

export enum FriendshipScalarFieldEnum {
  first_user_id = "first_user_id",
  second_user_id = "second_user_id",
  status = "status"
}
TypeGraphQL.registerEnumType(FriendshipScalarFieldEnum, {
  name: "FriendshipScalarFieldEnum",
  description: undefined,
});
