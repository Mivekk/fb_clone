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
    <>
      {hasMore && (
        <button
          onClick={() => startTransition(() => onClick())}
          disabled={!hasMore}
        >
          View more comments
        </button>
      )}
    </>
  );
};

export default FetchCommentsButton;
