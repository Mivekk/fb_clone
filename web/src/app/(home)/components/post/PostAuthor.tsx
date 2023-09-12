"use client";

import { UserFieldsFragment } from "@/generated/graphql";
import React from "react";

type PostAuthorProps = Partial<UserFieldsFragment>;

const PostAuthor: React.FC<PostAuthorProps> = ({ firstName, lastName }) => {
  return (
    <div className="flex gap-1">
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
};

export default PostAuthor;
