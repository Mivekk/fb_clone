"use client";

import { CommentsDocument } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";
import Comment from "../comment/Comment";

type PostCommentsProps = {
  postId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const { data } = useSuspenseQuery(CommentsDocument, {
    variables: { where: { postId: { equals: postId }, replyId: undefined } },
  });

  const comments = data.comments
    .map((comment) => <Comment key={comment.id} {...comment} />)
    .reverse();

  return <div>{comments}</div>;
};

export default PostComments;
