import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Friendship } from "../../../models/Friendship";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Friendship)
export class FriendshipRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async first_user(@TypeGraphQL.Root() friendship: Friendship, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findUniqueOrThrow({
      where: {
        first_user_id_second_user_id: {
          first_user_id: friendship.first_user_id,
          second_user_id: friendship.second_user_id,
        },
      },
    }).first_user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async second_user(@TypeGraphQL.Root() friendship: Friendship, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findUniqueOrThrow({
      where: {
        first_user_id_second_user_id: {
          first_user_id: friendship.first_user_id,
          second_user_id: friendship.second_user_id,
        },
      },
    }).second_user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
