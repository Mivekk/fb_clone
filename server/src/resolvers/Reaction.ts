import {
  Arg,
  Args,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Root,
  Subscription,
  UseMiddleware,
} from "type-graphql";
import { MyApolloContext, MyApolloSubscriptionContext } from "../context";
import { isAuth } from "../middleware/isAuth";
import { AddReactionInput } from "./utils/inputs";
import { Reaction, ReactionType } from "../generated/type-graphql";
import { Topic } from "./utils/topics";
import { ReactionsObject } from "./utils/outputs";

export class ReactionResolver {
  @Query(() => ReactionsObject)
  @UseMiddleware(isAuth)
  async reactions(
    @Ctx() { prisma, payload }: MyApolloContext,
    @Arg("postId") postId: number
  ): Promise<ReactionsObject> {
    const userId = payload?.userId;
    if (!userId) {
      throw new Error("not authenticated");
    }

    const reactions = await prisma.reaction.findMany({ where: { postId } });

    const voted = reactions.find((reaction) => reaction.authorId === userId)
      ?.type as ReactionType | undefined;

    const likeCount = await prisma.reaction.count({
      where: { postId, type: { equals: ReactionType.LIKE } },
    });
    const dislikeCount = await prisma.reaction.count({
      where: { postId, type: { equals: ReactionType.DISLIKE } },
    });

    return {
      voted,
      reactions,
      likeCount,
      dislikeCount,
    };
  }

  @Subscription(() => ReactionsObject, {
    nullable: true,
    topics: Topic.UpdateReactions,
    filter: ({ args, payload }) => payload === args.postId,
  })
  async updateReactions(
    @Ctx() { prisma }: MyApolloSubscriptionContext,
    @Arg("postId") _postId: number,
    @Root() postId: number
  ): Promise<ReactionsObject> {
    const reactions = await prisma.reaction.findMany({ where: { postId } });

    const likeCount = await prisma.reaction.count({
      where: { postId, type: { equals: ReactionType.LIKE } },
    });
    const dislikeCount = await prisma.reaction.count({
      where: { postId, type: { equals: ReactionType.DISLIKE } },
    });

    return {
      reactions,
      likeCount,
      dislikeCount,
    };
  }

  @Mutation(() => Reaction, { nullable: true })
  @UseMiddleware(isAuth)
  async addReaction(
    @Arg("data") data: AddReactionInput,
    @Ctx() { prisma, payload }: MyApolloContext,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Reaction | null> {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    const post = await prisma.post.findUnique({ where: { id: data.postId } });

    if (!post) {
      throw new Error("could not find post");
    }

    if (!Object.values(ReactionType).includes(data.type)) {
      throw new Error("invalid reaction type");
    }

    let reaction = await prisma.reaction.findFirst({
      where: { authorId: user.id, postId: post.id },
    });

    if (reaction && reaction.type === data.type) {
      reaction = await prisma.reaction.delete({ where: reaction });
    } else if (reaction) {
      reaction = await prisma.reaction.update({
        where: reaction,
        data: { type: data.type },
      });
    } else {
      reaction = await prisma.reaction.create({
        data: { ...data, authorId: user.id },
      });
    }

    await pubSub.publish(Topic.UpdateReactions, post.id);

    return reaction;
  }
}
