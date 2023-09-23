"use client";

import React from "react";

type PostTitleProps = {
  title: string;
};

const PostTitle: React.FC<PostTitleProps> = ({ title }) => {
  return <h4 className="text-xl font-semibold tracking-tight">{title}</h4>;
};

export default PostTitle;
