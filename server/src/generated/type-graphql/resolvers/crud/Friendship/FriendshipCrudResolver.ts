import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFriendshipArgs } from "./args/AggregateFriendshipArgs";
import { CreateManyFriendshipArgs } from "./args/CreateManyFriendshipArgs";
import { CreateOneFriendshipArgs } from "./args/CreateOneFriendshipArgs";
import { DeleteManyFriendshipArgs } from "./args/DeleteManyFriendshipArgs";
import { DeleteOneFriendshipArgs } from "./args/DeleteOneFriendshipArgs";
import { FindFirstFriendshipArgs } from "./args/FindFirstFriendshipArgs";
import { FindFirstFriendshipOrThrowArgs } from "./args/FindFirstFriendshipOrThrowArgs";
import { FindManyFriendshipArgs } from "./args/FindManyFriendshipArgs";
import { FindUniqueFriendshipArgs } from "./args/FindUniqueFriendshipArgs";
import { FindUniqueFriendshipOrThrowArgs } from "./args/FindUniqueFriendshipOrThrowArgs";
import { GroupByFriendshipArgs } from "./args/GroupByFriendshipArgs";
import { UpdateManyFriendshipArgs } from "./args/UpdateManyFriendshipArgs";
import { UpdateOneFriendshipArgs } from "./args/UpdateOneFriendshipArgs";
import { UpsertOneFriendshipArgs } from "./args/UpsertOneFriendshipArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Friendship } from "../../../models/Friendship";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFriendship } from "../../outputs/AggregateFriendship";
import { FriendshipGroupBy } from "../../outputs/FriendshipGroupBy";

@TypeGraphQL.Resolver(_of => Friendship)
export class FriendshipCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateFriendship, {
    nullable: false
  })
  async aggregateFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFriendshipArgs): Promise<AggregateFriendship> {
    return getPrismaFromContext(ctx).friendship.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFriendshipArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Friendship, {
    nullable: false
  })
  async createOneFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFriendshipArgs): Promise<Friendship> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFriendshipArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Friendship, {
    nullable: true
  })
  async deleteOneFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFriendshipArgs): Promise<Friendship | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Friendship, {
    nullable: true
  })
  async findFirstFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFriendshipArgs): Promise<Friendship | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Friendship, {
    nullable: true
  })
  async findFirstFriendshipOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFriendshipOrThrowArgs): Promise<Friendship | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Friendship], {
    nullable: false
  })
  async friendships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFriendshipArgs): Promise<Friendship[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Friendship, {
    nullable: true
  })
  async friendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFriendshipArgs): Promise<Friendship | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Friendship, {
    nullable: true
  })
  async getFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFriendshipOrThrowArgs): Promise<Friendship | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFriendshipArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Friendship, {
    nullable: true
  })
  async updateOneFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFriendshipArgs): Promise<Friendship | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Friendship, {
    nullable: false
  })
  async upsertOneFriendship(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFriendshipArgs): Promise<Friendship> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
