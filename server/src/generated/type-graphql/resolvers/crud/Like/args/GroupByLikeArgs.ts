import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikeOrderByWithAggregationInput } from "../../../inputs/LikeOrderByWithAggregationInput";
import { LikeScalarWhereWithAggregatesInput } from "../../../inputs/LikeScalarWhereWithAggregatesInput";
import { LikeWhereInput } from "../../../inputs/LikeWhereInput";
import { LikeScalarFieldEnum } from "../../../../enums/LikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLikeArgs {
  @TypeGraphQL.Field(_type => LikeWhereInput, {
    nullable: true
  })
  where?: LikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "value" | "postId">;

  @TypeGraphQL.Field(_type => LikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
