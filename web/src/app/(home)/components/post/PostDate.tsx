"use client";

import React from "react";
import TimeAgo from "react-timeago";

type PostDateProps = {
  createdAt: any;
};

const PostDate: React.FC<PostDateProps> = ({ createdAt }) => {
  return (
    <div className="-mt-2">
      <TimeAgo date={createdAt} className="text-sm" />
    </div>
  );
};

export default PostDate;
