"use client";

import {
  AddReactionDocument,
  MeDocument,
  ReactionType,
  ReactionsDocument,
} from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import {
  BiComment,
  BiDislike,
  BiLike,
  BiShare,
  BiSolidDislike,
  BiSolidLike,
} from "react-icons/bi";
import PostActionButton from "./PostActionButton";
import React, { useState } from "react";
import PostCreateComment from "./PostCreateComment";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useReactions } from "@/hooks/useReactions";
import { updateReactionCache } from "@/utils/updateReactionCache";

type PostActionsProps = {
  postId: number;
};

const PostActions: React.FC<PostActionsProps> = ({ postId }) => {
  const [expanded, setExpanded] = useState(0);

  const { data } = useReactions({ postId });

  const [addReaction, { client }] = useMutation(AddReactionDocument);

  const handleLike = async () => {
    const result = await addReaction({
      variables: { data: { postId, type: ReactionType.Like } },
    });

    if (!result.data) {
      console.log(result);
      return;
    }

    updateReactionCache({
      postId,
      client,
      reactionType: ReactionType.Like,
    });
  };

  const handleDislike = async () => {
    const result = await addReaction({
      variables: { data: { postId, type: ReactionType.Dislike } },
    });

    if (!result.data) {
      console.log(result);
      return;
    }

    updateReactionCache({
      postId,
      client,
      reactionType: ReactionType.Dislike,
    });
  };

  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-500">
      <div className="grid grid-cols-4 pt-2 pb-1">
        <PostActionButton handleClick={() => handleLike()} type="Like">
          {data.reactions?.voted === ReactionType.Like ? (
            <BiSolidLike />
          ) : (
            <BiLike />
          )}
        </PostActionButton>
        <PostActionButton handleClick={() => handleDislike()} type="Dislike">
          {data.reactions?.voted === ReactionType.Dislike ? (
            <BiSolidDislike />
          ) : (
            <BiDislike />
          )}
        </PostActionButton>
        <PostActionButton
          handleClick={() => setExpanded((prev) => prev + 1)}
          type="Comment"
        >
          <BiComment />
        </PostActionButton>
        <PostActionButton handleClick={() => null} type="Share">
          <BiShare />
        </PostActionButton>
      </div>
      <PostCreateComment
        postId={postId}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );
};

export default PostActions;
