"use client";

import { useComments } from "@/hooks/useComments";
import React from "react";
import Comment from "../comment/Comment";

type PostCommentsProps = {
  postId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const { data } = useComments({ postId });

  const comments = data.paginatedComments.comments.map(({ comment }) => (
    <Comment key={comment.id} {...comment} />
  ));

  return <div>{comments}</div>;
};

export default PostComments;
