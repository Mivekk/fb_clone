import type { ReactionFieldsFragment } from "@/generated/graphql";

type SplitReactionCountType = {
  likeCount: number;
  dislikeCount: number;
};

export const splitReactionCount = (
  reactions:
    | Partial<Omit<ReactionFieldsFragment, "author">>[]
    | null
    | undefined
): SplitReactionCountType => {
  if (!reactions) {
    return {
      likeCount: 0,
      dislikeCount: 0,
    };
  }

  const likeCount = reactions.filter(
    (reaction) => reaction.type === "LIKE"
  ).length;
  const dislikeCount = reactions.filter(
    (reaction) => reaction.type === "DISLIKE"
  ).length;

  return { likeCount, dislikeCount };
};
