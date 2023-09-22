"use client";

import { AddReactionDocument, ReactionType } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import React from "react";

type PostActionsProps = {
  postId: number;
};

const PostActions: React.FC<PostActionsProps> = ({ postId }) => {
  const [addReaction] = useMutation(AddReactionDocument);

  const handleLike = async () => {
    await addReaction({
      variables: { data: { postId, type: ReactionType.Like } },
    });
  };

  const handleDislike = async () => {
    await addReaction({
      variables: { data: { postId, type: ReactionType.Dislike } },
    });
  };

  return (
    <div className="flex gap-1">
      <button onClick={() => handleLike()}>Like</button>
      <button onClick={() => handleDislike()}>Dislike</button>
      <button>Comment</button>
      <button>Share</button>
    </div>
  );
};

export default PostActions;
