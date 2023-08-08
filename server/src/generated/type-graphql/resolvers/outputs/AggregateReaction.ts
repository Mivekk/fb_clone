import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionAvgAggregate } from "../outputs/ReactionAvgAggregate";
import { ReactionCountAggregate } from "../outputs/ReactionCountAggregate";
import { ReactionMaxAggregate } from "../outputs/ReactionMaxAggregate";
import { ReactionMinAggregate } from "../outputs/ReactionMinAggregate";
import { ReactionSumAggregate } from "../outputs/ReactionSumAggregate";

@TypeGraphQL.ObjectType("AggregateReaction", {
  simpleResolvers: true
})
export class AggregateReaction {
  @TypeGraphQL.Field(_type => ReactionCountAggregate, {
    nullable: true
  })
  _count!: ReactionCountAggregate | null;

  @TypeGraphQL.Field(_type => ReactionAvgAggregate, {
    nullable: true
  })
  _avg!: ReactionAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReactionSumAggregate, {
    nullable: true
  })
  _sum!: ReactionSumAggregate | null;

  @TypeGraphQL.Field(_type => ReactionMinAggregate, {
    nullable: true
  })
  _min!: ReactionMinAggregate | null;

  @TypeGraphQL.Field(_type => ReactionMaxAggregate, {
    nullable: true
  })
  _max!: ReactionMaxAggregate | null;
}
