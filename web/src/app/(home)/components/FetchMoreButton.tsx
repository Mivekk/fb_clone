"use client";

import React, { useState } from "react";

type FetchMoreButtonProps = {
  hasMore: boolean;
  onClick: () => void;
};

const FetchMoreButton: React.FC<FetchMoreButtonProps> = ({
  hasMore,
  onClick: onFetchMore,
}) => {
  return (
    <button onClick={() => onFetchMore()}>
      {hasMore ? <div>Get more</div> : <div>No more posts</div>}
    </button>
  );
};

export default FetchMoreButton;
