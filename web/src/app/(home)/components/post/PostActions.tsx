"use client";

import { AddReactionDocument, ReactionType } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { BiComment, BiDislike, BiLike, BiShare } from "react-icons/bi";
import PostActionButton from "./PostActionButton";
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
    <div className="grid grid-cols-4 pt-2 pb-1">
      <PostActionButton handleClick={() => handleLike()} type="Like">
        <BiLike />
      </PostActionButton>
      <PostActionButton handleClick={() => handleDislike()} type="Dislike">
        <BiDislike />
      </PostActionButton>
      <PostActionButton handleClick={() => 0} type="Comment">
        <BiComment />
      </PostActionButton>
      <PostActionButton handleClick={() => null} type="Share">
        <BiShare />
      </PostActionButton>
    </div>
  );
};

export default PostActions;
