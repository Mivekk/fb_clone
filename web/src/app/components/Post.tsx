"use client";

import { PostType } from "@/types";
import React, { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { Comment } from "./Comment";
import { CommentInput } from "./CommentInput";

export const Post: React.FC<PostType> = ({
  id,
  author,
  title,
  body,
  comments,
}) => {
  const [focus, setFocus] = useState(false);

  const commentsElements = comments
    .map((comment) => <Comment key={comment.id} {...comment} />)
    .reverse();

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
          onClick={() => setFocus(true)}
        >
          <FaRegCommentAlt className="mr-2" />
          <div className="font-semibold">Comment</div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#e1e3e6]"></div>
      <CommentInput postId={id} focus={focus} setFocus={setFocus} />
      {commentsElements.length > 0 ? <div>{commentsElements}</div> : null}
    </div>
  );
};
