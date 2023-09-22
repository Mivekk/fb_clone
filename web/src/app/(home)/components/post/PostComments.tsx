"use client";

import { CommentsDocument, UdpatePostDocument } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { EngagementCountType } from "./Post";
import React, { useEffect } from "react";

type PostCommentsProps = {
  postId: number;
  setEngagementCount: React.Dispatch<React.SetStateAction<EngagementCountType>>;
};

const PostComments: React.FC<PostCommentsProps> = ({
  postId,
  setEngagementCount,
}) => {
  const { data } = useSuspenseQuery(CommentsDocument, {
    variables: { where: { postId: { equals: postId } } },
  });

  useEffect(() => {
    setEngagementCount((prev) => ({
      ...prev,
      commentCount: data.comments.length,
    }));
  }, [data]);

  const comments = data.comments.map((comment) => (
    <div key={comment.id}>{comment.body}</div>
  ));

  return <div>{comments}</div>;
};

export default PostComments;
