import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { LikeWhereInput } from "../inputs/LikeWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";

@TypeGraphQL.InputType("LikeWhereUniqueInput", {})
export class LikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  AND?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  OR?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  NOT?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}
