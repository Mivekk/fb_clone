import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikeOrderByWithRelationInput } from "../../../inputs/LikeOrderByWithRelationInput";
import { LikeWhereInput } from "../../../inputs/LikeWhereInput";
import { LikeWhereUniqueInput } from "../../../inputs/LikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLikeArgs {
  @TypeGraphQL.Field(_type => LikeWhereInput, {
    nullable: true
  })
  where?: LikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: LikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
