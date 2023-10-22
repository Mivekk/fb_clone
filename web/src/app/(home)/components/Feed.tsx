"use client";

import React, { Suspense } from "react";
import { usePosts } from "@/hooks/usePosts";
import { ErrorBoundary } from "react-error-boundary";
import FetchPostsButton from "./FetchPostsButton";
import Post from "./post/Post";

const Feed: React.FC<{}> = ({}) => {
  const { data, hasMore, handleFetchMore } = usePosts();

  const posts = data.paginatedPosts.posts.map((post) => {
    return (
      <ErrorBoundary
        key={post.id}
        fallback={<div>Something went wrong...</div>}
      >
        <Post {...post} />
      </ErrorBoundary>
    );
  });

  return (
    <div>
      <div>{posts}</div>
      <FetchPostsButton hasMore={hasMore} onClick={() => handleFetchMore()} />
    </div>
  );
};

export default Feed;
