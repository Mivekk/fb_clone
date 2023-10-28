import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FriendshipListRelationFilter } from "../inputs/FriendshipListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tokenVersion?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  external_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  external_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionListRelationFilter, {
    nullable: true
  })
  reactions?: ReactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FriendshipListRelationFilter, {
    nullable: true
  })
  friendships?: FriendshipListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FriendshipListRelationFilter, {
    nullable: true
  })
  prisma_friendships?: FriendshipListRelationFilter | undefined;
}
