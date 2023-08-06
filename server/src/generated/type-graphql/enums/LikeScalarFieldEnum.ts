import * as TypeGraphQL from "type-graphql";

export enum LikeScalarFieldEnum {
  id = "id",
  value = "value",
  postId = "postId"
}
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
  name: "LikeScalarFieldEnum",
  description: undefined,
});
