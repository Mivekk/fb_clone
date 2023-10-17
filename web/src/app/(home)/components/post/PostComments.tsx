"use client";

import { usePaginatedComments } from "@/hooks/usePaginatedComments";
import React from "react";
import Comment from "../comment/Comment";

type PostCommentsProps = {
  postId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const { data } = usePaginatedComments({ postId });

  const comments = data.paginatedComments.comments.map(({ comment }) => (
    <Comment key={comment.id} {...comment} />
  ));

  return <div>{comments}</div>;
};

export default PostComments;
