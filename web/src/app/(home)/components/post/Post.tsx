"use client";

import { PostFieldsFragment } from "@/generated/graphql";
import React, { Suspense, useState } from "react";
import PostAuthor from "./PostAuthor";
import PostComments from "./PostComments";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostReactions from "./PostReactions";
import PostActions from "./PostActions";
import PostEngagementBar from "./PostEngagementBar";
import PostDate from "./PostDate";

type PostProps = {
  id: number;
  title: string;
  body: string;
  createdAt: any;
  author: {
    id: number;
    firstName: string;
    lastName: string;
  };
};

export type EngagementCountType = {
  commentCount: number;
  likeCount: number;
  dislikeCount: number;
};

const Post: React.FC<PostProps> = ({ id, author, title, body, createdAt }) => {
  return (
    <div className="mt-4 pl-2 pr-2 pb-1 rounded-md md:w-[32rem] sm:w-[24rem] w-[18rem] shadow-md bg-white">
      <PostDate createdAt={createdAt} />
      <PostAuthor {...author} />
      <PostTitle title={title} />
      <PostBody body={body} />
      <div className="divide-y-2">
        <PostEngagementBar postId={id} />
        <PostActions postId={id} />
      </div>
      <Suspense fallback={<div>Loading comments...</div>}>
        <PostComments postId={id} />
      </Suspense>
    </div>
  );
};

export default Post;
