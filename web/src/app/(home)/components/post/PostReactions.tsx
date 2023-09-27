"use client";

import { ReactionsDocument } from "@/generated/graphql";
import { splitReactionCount } from "@/utils/splitReactionCount";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

type PostReactionsProps = {
  postId: number;
};

const PostReactions: React.FC<PostReactionsProps> = ({ postId }) => {
  const { data } = useSuspenseQuery(ReactionsDocument, {
    variables: { where: { postId: { equals: postId } } },
  });

  const { likeCount, dislikeCount } = splitReactionCount(data.reactions);

  return (
    <>
      <div className="flex items-center gap-1">
        <BiSolidLike />
        <div>{likeCount}</div>
      </div>
      <div className="flex items-center gap-1">
        <BiSolidDislike />
        <div>{dislikeCount}</div>
      </div>
    </>
  );
};

export default PostReactions;
