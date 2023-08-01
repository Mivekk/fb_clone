"use client";

import React, { Suspense, useRef } from "react";
import Comment, { CommentProps } from "./Comment";
import { FaRegCommentAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { AddCommentDocument } from "@/generated/graphql";
import CommentInput from "./CommentInput";

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

const Post: React.FC<Props> = ({ id, author, title, body, comments }) => {
  const commentsElements = comments.map((comment) => (
    <Comment key={comment.id} {...comment} />
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
      <div className="w-full h-[1px] bg-[#e1e3e6]"></div>
      <div className="flex pt-[6px] pb-[6px] justify-center">
        <div
          className="flex cursor-pointer w-[30%] h-8 justify-center items-center rounded-md hover:bg-[#F2F2F2]"
          onClick={async () => {}}
        >
          <FaRegCommentAlt className="mr-2" />
          <div className="font-semibold">Comment</div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#e1e3e6]"></div>
      <CommentInput postId={id} />
      {commentsElements.length > 0 ? <div>{commentsElements}</div> : null}
    </div>
  );
};

export default Post;
