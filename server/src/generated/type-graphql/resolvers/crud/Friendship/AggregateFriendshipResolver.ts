import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFriendshipArgs } from "./args/AggregateFriendshipArgs";
import { Friendship } from "../../../models/Friendship";
import { AggregateFriendship } from "../../outputs/AggregateFriendship";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Friendship)
export class AggregateFriendshipResolver {
  @TypeGraphQL.Query(_returns => AggregateFriendship, {
    nullable: false
  })
  async aggregateFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFriendshipArgs): Promise<AggregateFriendship> {
    return getPrismaFromContext(ctx).friendship.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
