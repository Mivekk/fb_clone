"use client";

import { AvatarFallback } from "@/app/components/ui/avatar";
import { Skeleton } from "@/app/components/ui/skeleton";
import { UserFieldsFragment } from "@/generated/graphql";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
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
