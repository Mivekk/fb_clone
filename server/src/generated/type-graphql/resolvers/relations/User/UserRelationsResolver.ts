import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Friendship } from "../../../models/Friendship";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { User } from "../../../models/User";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFriendshipsArgs } from "./args/UserFriendshipsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserPrisma_friendshipsArgs } from "./args/UserPrisma_friendshipsArgs";
import { UserReactionsArgs } from "./args/UserReactionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).posts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Comment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).comments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Reaction], {
    nullable: false
  })
  async reactions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserReactionsArgs): Promise<Reaction[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).reactions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Friendship], {
    nullable: false
  })
  async friendships(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserFriendshipsArgs): Promise<Friendship[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).friendships({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Friendship], {
    nullable: false
  })
  async prisma_friendships(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserPrisma_friendshipsArgs): Promise<Friendship[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).prisma_friendships({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
