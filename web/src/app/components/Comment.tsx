"use client";

import React from "react";

export interface CommentProps {
  __typename?: "Comment" | undefined;
  id: number;
  authorId: number;
  postId: number;
  body: string;
  author: {
    __typename?: "User" | undefined;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

const Comment: React.FC<CommentProps> = ({ author, body }) => {
  return (
    <div className="w-fit ml-4 mr-6 mt-2 mb-2 p-2 pt-1 pb-1 rounded-lg bg-[#f0f2f5]">
      <div className="text-sm -mb-1 font-semibold">
        {author.firstName} {author.lastName}
      </div>
      <div>{body}</div>
    </div>
  );
};

export default Comment;
