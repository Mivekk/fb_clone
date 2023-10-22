"use client";

import React, { useTransition } from "react";

type FetchCommentsButtonProps = {
  hasMore: boolean;
  onClick: () => void;
};

const FetchCommentsButton: React.FC<FetchCommentsButtonProps> = ({
  hasMore,
  onClick,
}) => {
  const [, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => onClick())}
      disabled={!hasMore}
    >
      {hasMore ? <div>Get more</div> : <div>No more comments</div>}
    </button>
  );
};

export default FetchCommentsButton;
