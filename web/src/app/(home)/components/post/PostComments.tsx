"use client";

import { CommentsDocument } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";

type PostCommentsProps = {
  postId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const { data } = useSuspenseQuery(CommentsDocument, {
    variables: { where: { postId: { equals: postId } } },
  });

  const comments = data.comments.map((comment) => (
    <div key={comment.id}>{comment.body}</div>
  ));

  return <div>{comments}</div>;
};

export default PostComments;
