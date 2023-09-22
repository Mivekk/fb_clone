"use client";

import { ReactionsDocument } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React, { useEffect } from "react";
import type { EngagementCountType } from "./Post";
import { splitReactionCount } from "@/utils/splitReactionCount";

type PostReactionsProps = {
  postId: number;
  setEngagementCount: React.Dispatch<React.SetStateAction<EngagementCountType>>;
};

const PostReactions: React.FC<PostReactionsProps> = ({
  postId,
  setEngagementCount,
}) => {
  const { data } = useSuspenseQuery(ReactionsDocument, {
    variables: { where: { postId: { equals: postId } } },
  });

  useEffect(() => {
    const { likeCount, dislikeCount } = splitReactionCount(data.reactions);

    setEngagementCount((prev) => ({ ...prev, likeCount, dislikeCount }));
  }, [data]);

  const reactions = data.reactions.map((reaction) => (
    <div key={reaction.id}>{reaction.type}</div>
  ));

  return <div className="flex">{reactions}</div>;
};

export default PostReactions;
