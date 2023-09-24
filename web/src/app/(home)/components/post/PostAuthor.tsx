"use client";

import { UserFieldsFragment } from "@/generated/graphql";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import React from "react";

type PostAuthorProps = Partial<UserFieldsFragment>;

const PostAuthor: React.FC<PostAuthorProps> = ({ firstName, lastName }) => {
  return (
    <div className="flex gap-1 items-center">
      <Avatar>
        <AvatarImage src="/pic.png" className="h-10 w-10 rounded-full" />
        <AvatarFallback />
      </Avatar>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
};

export default PostAuthor;
