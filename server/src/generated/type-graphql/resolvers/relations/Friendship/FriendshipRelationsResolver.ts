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
  async sender(@TypeGraphQL.Root() friendship: Friendship, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findUniqueOrThrow({
      where: {
        senderId_receiverId: {
          senderId: friendship.senderId,
          receiverId: friendship.receiverId,
        },
      },
    }).sender({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async receiver(@TypeGraphQL.Root() friendship: Friendship, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).friendship.findUniqueOrThrow({
      where: {
        senderId_receiverId: {
          senderId: friendship.senderId,
          receiverId: friendship.receiverId,
        },
      },
    }).receiver({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
