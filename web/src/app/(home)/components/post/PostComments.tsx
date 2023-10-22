"use client";

import { useComments } from "@/hooks/useComments";
import React from "react";
import Comment from "../comment/Comment";
import FetchCommentsButton from "../FetchCommentsButton";

type PostCommentsProps = {
  postId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const { data, hasMore, handleFetchMore } = useComments({ postId });

  const comments = data.paginatedComments.comments.map(({ comment }) => (
    <Comment key={comment.id} {...comment} />
  ));

  return (
    <div>
      {comments}
      <FetchCommentsButton
        hasMore={hasMore}
        onClick={() => handleFetchMore()}
      />
    </div>
  );
};

export default PostComments;
