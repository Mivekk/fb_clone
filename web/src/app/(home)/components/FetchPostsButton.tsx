"use client";

import React, { useState, useTransition } from "react";

type FetchPostsButtonProps = {
  hasMore: boolean;
  onClick: () => void;
};

const FetchPostsButton: React.FC<FetchPostsButtonProps> = ({
  hasMore,
  onClick,
}) => {
  const [, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => onClick())}
      disabled={!hasMore}
    >
      {hasMore ? (
        <div className="dark:text-betterGray">View more posts</div>
      ) : (
        <div>No more posts</div>
      )}
    </button>
  );
};

export default FetchPostsButton;
