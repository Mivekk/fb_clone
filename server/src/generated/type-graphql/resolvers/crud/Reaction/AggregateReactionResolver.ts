import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateReactionArgs } from "./args/AggregateReactionArgs";
import { Reaction } from "../../../models/Reaction";
import { AggregateReaction } from "../../outputs/AggregateReaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reaction)
export class AggregateReactionResolver {
  @TypeGraphQL.Query(_returns => AggregateReaction, {
    nullable: false
  })
  async aggregateReaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionArgs): Promise<AggregateReaction> {
    return getPrismaFromContext(ctx).reaction.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
