"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import TimeAgo from "react-timeago";
import React from "react";
import { CommentFieldsFragment } from "@/generated/graphql";

type CommentProps = Omit<Partial<CommentFieldsFragment>, "author"> & {
  author: {
    firstName: string;
    lastName: string;
    image_url?: string | null;
  };
};

const Comment: React.FC<CommentProps> = ({ body, createdAt, author }) => {
  return (
    <div className="flex mt-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={author.image_url!} className="h-8 w-8 rounded-full" />
        <AvatarFallback />
      </Avatar>
      <div className="flex flex-col">
        <div className="ml-2 w-fit h-fit bg-gray-200 rounded-2xl px-2 py-1 text-sm leading-4">
          <div className="text-xs font-semibold">
            {author.firstName} {author.lastName}
          </div>
          <div className="whitespace-pre-wrap">{body}</div>
        </div>
        <TimeAgo date={createdAt} className="text-xs ml-4" />
      </div>
    </div>
  );
};

export default Comment;
