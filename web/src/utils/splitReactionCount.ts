import type { ReactionFieldsFragment } from "@/generated/graphql";

type SplitReactionCountType = {
  likeCount: number;
  dislikeCount: number;
};

export const splitReactionCount = (
  reactions: Partial<Omit<ReactionFieldsFragment, "author">>[]
): SplitReactionCountType => {
  const likeCount = reactions.filter(
    (reaction) => reaction.type === "LIKE"
  ).length;
  const dislikeCount = reactions.filter(
    (reaction) => reaction.type === "DISLIKE"
  ).length;

  return { likeCount, dislikeCount };
};
