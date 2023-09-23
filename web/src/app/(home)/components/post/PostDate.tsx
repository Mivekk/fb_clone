"use client";

import React from "react";
import TimeAgo from "react-timeago";

type PostDateProps = {
  createdAt: any;
};

const PostDate: React.FC<PostDateProps> = ({ createdAt }) => {
  return (
    <div>
      <TimeAgo date={createdAt} className="text-sm" />
    </div>
  );
};

export default PostDate;
