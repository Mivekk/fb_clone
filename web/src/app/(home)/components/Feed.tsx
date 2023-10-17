"use client";

import React from "react";
import { usePosts } from "@/hooks/usePaginatedPosts";
import { ErrorBoundary } from "react-error-boundary";
import FetchMoreButton from "./FetchMoreButton";
import Post from "./post/Post";

const Feed: React.FC<{}> = ({}) => {
  const { data, hasMore, handleFetchMore } = usePosts();

  if (!data) {
    return <div>No posts available!</div>;
  }

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
      <FetchMoreButton hasMore={hasMore} onClick={() => handleFetchMore()} />
    </div>
  );
};

export default Feed;
