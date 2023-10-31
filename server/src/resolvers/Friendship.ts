import { User, FriendStatus } from "../generated/type-graphql";
import { MyApolloContext } from "../context";
import { isAuth } from "../middleware/isAuth";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";

@Resolver()
export class FriendshipResolver {
  @Query(() => [User])
  async friends(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<User[]> {
    const users = await prisma.friendship.findMany({
      where: { first_user_id: userId, status: FriendStatus.FRIENDS },
    });

    const friends = (await Promise.all(
      users
        .map((user) =>
          prisma.user.findUnique({ where: { id: user.second_user_id } })
        )
        .filter((el) => el)
    )) as User[];

    return friends;
  }

  @Query(() => FriendStatus, { nullable: true })
  @UseMiddleware(isAuth)
  async friendStatus(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<FriendStatus | null> {
    if (!payload?.userId) {
      throw new Error("not authenticated");
    }
    const friendship = await prisma.friendship.findUnique({
      where: {
        first_user_id_second_user_id: {
          first_user_id: payload.userId,
          second_user_id: userId,
        },
      },
    });

    if (!friendship) {
      return null;
    }

    const { status } = friendship;

    return status as FriendStatus;
  }

  @Mutation(() => FriendStatus)
  @UseMiddleware(isAuth)
  async addFriend(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<FriendStatus> {
    if (!payload?.userId) {
      throw new Error("not authenticated");
    }

    const friendship = await prisma.friendship.findUnique({
      where: {
        first_user_id_second_user_id: {
          first_user_id: payload.userId,
          second_user_id: userId,
        },
      },
    });

    if (friendship) {
      throw new Error("already established relation");
    }

    const friendships = await prisma.friendship.createMany({
      data: [
        {
          first_user_id: payload.userId,
          second_user_id: userId,
          status: FriendStatus.INVITE_SENT,
        },
        {
          first_user_id: userId,
          second_user_id: payload.userId,
          status: FriendStatus.INVITE_RECEIVED,
        },
      ],
    });

    if (friendships.count < 2) {
      throw new Error("could not add friend");
    }

    return FriendStatus.INVITE_SENT;
  }

  @Mutation(() => FriendStatus)
  @UseMiddleware(isAuth)
  async acceptFriend(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<FriendStatus> {
    if (!payload?.userId) {
      throw new Error("not authenticated");
    }

    const friendship = await prisma.friendship.findUnique({
      where: {
        first_user_id_second_user_id: {
          first_user_id: payload.userId,
          second_user_id: userId,
        },
        status: FriendStatus.INVITE_RECEIVED,
      },
    });

    if (!friendship) {
      throw new Error("incorrect relation");
    }

    const friendships = await prisma.friendship.updateMany({
      where: {
        first_user_id: {
          in: [payload.userId, userId],
        },
        second_user_id: {
          in: [userId, payload.userId],
        },
      },
      data: {
        status: FriendStatus.FRIENDS,
      },
    });

    if (friendships.count < 2) {
      throw new Error("could not add friend");
    }

    return FriendStatus.FRIENDS;
  }
}
