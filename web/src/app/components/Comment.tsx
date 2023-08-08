"use client";

import { CommentType } from "@/types";
import Image from "next/image";
import React from "react";
import stick from "../../../public/stick.png";

export const Comment: React.FC<CommentType> = ({ author, body }) => {
  return (
    <div className="flex">
      <Image
        src={stick}
        alt="profile picture"
        className="w-10 h-10 ml-4 -mr-2 mt-2 max-h-full rounded-full"
      />
      <div className="w-fit ml-4 mr-6 mt-2 mb-2 p-2 pt-1 pb-1 rounded-lg bg-[#f0f2f5]">
        <div className="text-sm -mb-1 font-semibold">
          {author.firstName} {author.lastName}
        </div>
        <div>{body}</div>
      </div>
    </div>
  );
};
