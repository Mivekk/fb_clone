"use client";

import React, { Suspense } from "react";
import Comment, { CommentProps } from "./Comment";

interface Comment {}

interface Props {
  __typename?: "Post" | undefined;
  id: number;
  title: string;
  body: string;
  createdAt: any;
  updatedAt: any;
  author: {
    __typename?: "User" | undefined;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  comments: CommentProps[];
}

const Post: React.FC<Props> = ({ author, title, body, comments }) => {
  const commentsElements = comments.map((comment) => (
    <Suspense key={comment.id} fallback={<div>loading...</div>}>
      <Comment {...comment} />
    </Suspense>
  ));

  return (
    <div className="mt-2 mb-2 w-[50rem] bg-white rounded-md border border-[#e1e3e6] shadow-sm">
      <div className="m-2 ml-4 mr-4">
        <div className="-mb-1">
          {author.firstName} {author.lastName}
        </div>
        <div className="font-bold text-xl">{title}</div>
        <div className="text-lg">{body}</div>
      </div>
      {commentsElements.length > 0 ? (
        <>
          <div className="w-full h-[1px] bg-[#e1e3e6]"></div>
          <div>{commentsElements}</div>
        </>
      ) : null}
    </div>
  );
};

export default Post;
