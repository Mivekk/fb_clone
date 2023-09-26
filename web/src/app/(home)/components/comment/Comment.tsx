"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import TimeAgo from "react-timeago";
import React from "react";

type CommentProps = {
  body: string;
  postId: number;
  createdAt: any;
};

const Comment: React.FC<CommentProps> = ({ body, createdAt }) => {
  return (
    <div className="flex mt-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/pic.png" className="h-8 w-8 rounded-full" />
        <AvatarFallback />
      </Avatar>
      <div className="flex flex-col">
        <div className="ml-2 w-fit h-fit bg-gray-200 rounded-2xl px-2 py-1 text-sm leading-4">
          <div className="text-xs font-semibold">mivekk mivekk</div>
          <div>{body}</div>
        </div>
        <TimeAgo date={createdAt} className="text-xs ml-4" />
      </div>
    </div>
  );
};

export default Comment;
