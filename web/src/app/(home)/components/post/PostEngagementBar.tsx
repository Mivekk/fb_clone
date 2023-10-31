"use client";

import { useComments } from "@/hooks/useComments";
import { useReactions } from "@/hooks/useReactions";
import React from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

type PostEngagementBarProps = {
  postId: number;
};

const PostEngagementBar: React.FC<PostEngagementBarProps> = ({ postId }) => {
  const {
    data: { paginatedComments },
  } = useComments({ postId });
  const {
    data: { reactions },
  } = useReactions({ postId });

  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-1">
        <BiSolidLike />
        <div>{reactions.likeCount}</div>
      </div>
      <div className="flex items-center gap-1">
        <BiSolidDislike />
        <div>{reactions.dislikeCount}</div>
      </div>
      <div className="flex gap-4 ml-auto">
        <div className="">
          {paginatedComments.commentCount}
          {paginatedComments.commentCount === 1 ? " comment" : " comments"}
        </div>
        <div>0 shares</div>
      </div>
    </div>
  );
};

export default PostEngagementBar;
