import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionTypeFilter } from "../inputs/EnumReactionTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReactionWhereInput", {})
export class ReactionWhereInput {
  @TypeGraphQL.Field(_type => [ReactionWhereInput], {
    nullable: true
  })
  AND?: ReactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereInput], {
    nullable: true
  })
  OR?: ReactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereInput], {
    nullable: true
  })
  NOT?: ReactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  authorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionTypeFilter, {
    nullable: true
  })
  type?: EnumReactionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}
