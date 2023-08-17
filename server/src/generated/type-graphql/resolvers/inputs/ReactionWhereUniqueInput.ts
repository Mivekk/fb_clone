import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentNullableRelationFilter } from "../inputs/CommentNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionTypeFilter } from "../inputs/EnumReactionTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { ReactionWhereInput } from "../inputs/ReactionWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReactionWhereUniqueInput", {})
export class ReactionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
  authorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionTypeFilter, {
    nullable: true
  })
  type?: EnumReactionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  commentId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentNullableRelationFilter, {
    nullable: true
  })
  comment?: CommentNullableRelationFilter | undefined;
}
