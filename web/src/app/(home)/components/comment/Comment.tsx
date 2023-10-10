"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { CommentFieldsFragment } from "@/generated/graphql";
import { useProfileTransition } from "@/hooks/useProfileTransition";
import React from "react";
import TimeAgo from "react-timeago";

type CommentProps = Omit<Partial<CommentFieldsFragment>, "author"> & {
  author: {
    id: number;
    firstName: string;
    lastName: string;
    image_url?: string | null;
  };
};

const Comment: React.FC<CommentProps> = ({ body, createdAt, author }) => {
  const [handleTransition] = useProfileTransition();

  return (
    <div className="flex mt-2">
      <Avatar
        image_url={author.image_url}
        onClick={() => handleTransition(author.id)}
        className="h-8 w-8"
      />
      <div className="flex flex-col">
        <div className="ml-2 w-fit h-fit bg-gray-200 rounded-2xl px-2 py-1 text-sm leading-4">
          <div
            onClick={() => handleTransition(author.id)}
            className="text-xs font-semibold hover:cursor-pointer"
          >
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
