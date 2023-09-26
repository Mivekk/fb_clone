"use client";

import { UserFieldsFragment } from "@/generated/graphql";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import React from "react";
import PostDate from "./PostDate";

type PostAuthorProps = Partial<UserFieldsFragment> & {
  postCreatedAt: any;
};

const PostAuthor: React.FC<PostAuthorProps> = ({
  firstName,
  lastName,
  postCreatedAt,
}) => {
  return (
    <div className="flex gap-1 items-center pt-2">
      <Avatar>
        <AvatarImage src="/pic.png" className="h-10 w-10 rounded-full" />
        <AvatarFallback />
      </Avatar>
      <div className="flex flex-col">
        <div className="flex font-semibold gap-1">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <PostDate createdAt={postCreatedAt} />
      </div>
    </div>
  );
};

export default PostAuthor;
