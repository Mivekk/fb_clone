"use client";

import { PostFieldsFragment } from "@/generated/graphql";
import React, { Suspense, useState } from "react";
import PostAuthor from "./PostAuthor";
import PostComments from "./PostComments";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostReactions from "./PostReactions";
import PostActions from "./PostActions";

type PostProps = {
  id: number;
  title: string;
  body: string;
  author: {
    firstName: string;
    lastName: string;
  };
};

export type EngagementCountType = {
  commentCount: number;
  likeCount: number;
  dislikeCount: number;
};

const Post: React.FC<PostProps> = ({ id, author, title, body }) => {
  const [{ commentCount, likeCount, dislikeCount }, setEngagementCount] =
    useState<EngagementCountType>({
      commentCount: 0,
      likeCount: 0,
      dislikeCount: 0,
    });

  return (
    <div className="pt-4">
      <PostAuthor {...author} />
      <PostTitle title={title} />
      <PostBody body={body} />
      <div className="flex gap-1">
        <div>{likeCount}</div>
        <div>{dislikeCount}</div>
        <div>{commentCount}</div>
      </div>
      <PostActions postId={id} />
      <Suspense fallback={<div>Loading reactions...</div>}>
        <PostReactions postId={id} setEngagementCount={setEngagementCount} />
      </Suspense>
      <Suspense fallback={<div>Loading comments...</div>}>
        <PostComments postId={id} setEngagementCount={setEngagementCount} />
      </Suspense>
    </div>
  );
};

export default Post;
