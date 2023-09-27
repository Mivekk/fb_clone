"use client";

import React, { Suspense } from "react";
import PostReactions from "./PostReactions";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { CommentsDocument } from "@/generated/graphql";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

type PostEngagementBarProps = {
  postId: number;
};

const PostEngagementBar: React.FC<PostEngagementBarProps> = ({ postId }) => {
  const { data } = useQuery(CommentsDocument, {
    variables: { where: { postId: { equals: postId } } },
    fetchPolicy: "cache-only",
  });

  const commentCount = data?.comments.length ?? 0;

  return (
    <div className="flex gap-2">
      <Suspense fallback={<div>...</div>}>
        <PostReactions postId={postId} />
      </Suspense>
      <div className="flex gap-4 ml-auto">
        <div className="">
          {commentCount} {commentCount === 1 ? "comment" : "comments"}
        </div>
        <div>0 shares</div>
      </div>
    </div>
  );
};

export default PostEngagementBar;
