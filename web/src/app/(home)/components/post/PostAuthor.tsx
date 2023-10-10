"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { UserFieldsFragment } from "@/generated/graphql";
import React from "react";
import PostDate from "./PostDate";
import { useProfileTransition } from "@/hooks/useProfileTransition";

type PostAuthorProps = Partial<UserFieldsFragment> & {
  createdAt: any;
};

const PostAuthor: React.FC<PostAuthorProps> = ({
  image_url,
  id,
  firstName,
  lastName,
  createdAt,
}) => {
  const [handleTransition] = useProfileTransition();

  return (
    <div className="flex gap-1 items-center pt-2">
      <Avatar image_url={image_url} onClick={() => handleTransition(id)} />
      <div className="flex flex-col">
        <div
          onClick={() => handleTransition(id)}
          className="flex font-semibold gap-1 hover:cursor-pointer"
        >
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <PostDate createdAt={createdAt} />
      </div>
    </div>
  );
};

export default PostAuthor;
