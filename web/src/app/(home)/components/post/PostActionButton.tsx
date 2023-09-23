"use client";

import React from "react";

type PostActionButtonProps = {
  type: string;
  children: React.ReactNode;
  handleClick: () => void;
};

const PostActionButton: React.FC<PostActionButtonProps> = ({
  type,
  children,
  handleClick,
}) => {
  return (
    <button
      onClick={() => handleClick()}
      className="flex items-center justify-center gap-1"
    >
      {children}
      <div className="sm:block hidden">{type}</div>
    </button>
  );
};

export default PostActionButton;
