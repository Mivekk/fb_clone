"use client";

import { PostFieldsFragment } from "@/generated/graphql";
import React, { Suspense } from "react";
import PostAuthor from "./PostAuthor";
import PostEngagementsMetrics from "./PostEngagementsMetrics";
import PostComments from "./PostComments";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

type PostProps = Partial<PostFieldsFragment>;

const Post: React.FC<PostProps> = ({ id, author, title, body }) => {
  return (
    <div className="pt-4">
      <PostAuthor {...author!} />
      <PostTitle title={title!} />
      <PostBody body={body!} />
      <PostEngagementsMetrics />
      <Suspense fallback={<div>Loading comments...</div>}>
        <PostComments postId={id!} />
      </Suspense>
    </div>
  );
};

export default Post;
