"use client";

import React, { useState } from "react";

type FetchMoreButtonProps = {
  onClick: () => Promise<boolean>;
};

const FetchMoreButton: React.FC<FetchMoreButtonProps> = ({
  onClick: onFetchMore,
}) => {
  const [hasMore, setHasMore] = useState(true);

  return (
    <button
      onClick={async () => {
        setHasMore(await onFetchMore());
      }}
    >
      {hasMore ? <div>Get more</div> : <div>No more posts</div>}
    </button>
  );
};

export default FetchMoreButton;
