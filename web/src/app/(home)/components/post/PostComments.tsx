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
    variables: { where: { postId: { equals: postId } } },
  });

  const comments = data.comments.map((comment) => (
    <Comment
      key={comment.id}
      {...comment}
      image_url={comment.author.image_url}
    />
  ));

  return <div>{comments}</div>;
};

export default PostComments;
