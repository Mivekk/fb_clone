"use client";

import React from "react";

type PostTitleProps = {
  title: string;
};

const PostTitle: React.FC<PostTitleProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default PostTitle;
