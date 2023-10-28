import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFriendshipArgs } from "./args/GroupByFriendshipArgs";
import { Friendship } from "../../../models/Friendship";
import { FriendshipGroupBy } from "../../outputs/FriendshipGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Friendship)
export class GroupByFriendshipResolver {
  @TypeGraphQL.Query(_returns => [FriendshipGroupBy], {
    nullable: false
  })
  async groupByFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFriendshipArgs): Promise<FriendshipGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
