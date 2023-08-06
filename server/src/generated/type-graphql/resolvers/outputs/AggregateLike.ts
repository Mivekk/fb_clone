import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeAvgAggregate } from "../outputs/LikeAvgAggregate";
import { LikeCountAggregate } from "../outputs/LikeCountAggregate";
import { LikeMaxAggregate } from "../outputs/LikeMaxAggregate";
import { LikeMinAggregate } from "../outputs/LikeMinAggregate";
import { LikeSumAggregate } from "../outputs/LikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateLike", {
  simpleResolvers: true
})
export class AggregateLike {
  @TypeGraphQL.Field(_type => LikeCountAggregate, {
    nullable: true
  })
  _count!: LikeCountAggregate | null;

  @TypeGraphQL.Field(_type => LikeAvgAggregate, {
    nullable: true
  })
  _avg!: LikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => LikeSumAggregate, {
    nullable: true
  })
  _sum!: LikeSumAggregate | null;

  @TypeGraphQL.Field(_type => LikeMinAggregate, {
    nullable: true
  })
  _min!: LikeMinAggregate | null;

  @TypeGraphQL.Field(_type => LikeMaxAggregate, {
    nullable: true
  })
  _max!: LikeMaxAggregate | null;
}
