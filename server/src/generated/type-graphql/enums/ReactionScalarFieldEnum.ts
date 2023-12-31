import * as TypeGraphQL from "type-graphql";

export enum ReactionScalarFieldEnum {
  id = "id",
  authorId = "authorId",
  type = "type",
  postId = "postId",
  commentId = "commentId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ReactionScalarFieldEnum, {
  name: "ReactionScalarFieldEnum",
  description: undefined,
});
