import * as TypeGraphQL from "type-graphql";

export enum ReactionType {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE"
}
TypeGraphQL.registerEnumType(ReactionType, {
  name: "ReactionType",
  description: undefined,
});
