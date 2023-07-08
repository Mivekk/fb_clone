import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  password = "password",
  tokenVersion = "tokenVersion",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
