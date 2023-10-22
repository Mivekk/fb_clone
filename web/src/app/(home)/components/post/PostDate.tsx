"use client";

import dynamic from "next/dynamic";
import React from "react";

const TimeAgoNoSSR = dynamic(() => import("react-timeago"), { ssr: false });

type PostDateProps = {
  createdAt: any;
};

const PostDate: React.FC<PostDateProps> = ({ createdAt }) => {
  return (
    <div className="-mt-2">
      <TimeAgoNoSSR date={createdAt} className="text-sm" />
    </div>
  );
};

export default PostDate;
