"use client";

import React, { Suspense } from "react";
import PostActions from "./PostActions";
import PostAuthor from "./PostAuthor";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostDate from "./PostDate";
import PostEngagementBar from "./PostEngagementBar";
import PostTitle from "./PostTitle";

type PostProps = {
  id: number;
  title: string;
  body: string;
  createdAt: any;
  author: {
    id: number;
    image_url?: string | null;
    firstName: string;
    lastName: string;
  };
};

const Post: React.FC<PostProps> = ({ id, author, title, body, createdAt }) => {
  return (
    <div className="mt-4 pl-2 pr-2 pb-1 rounded-md md:w-[32rem] sm:w-[24rem] w-[18rem] shadow-md bg-white">
      <PostAuthor {...author} postCreatedAt={createdAt} />
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
