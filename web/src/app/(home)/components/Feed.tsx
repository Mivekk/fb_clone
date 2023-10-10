"use client";

import React from "react";
import { useFeed } from "@/hooks/useFeed";
import FetchMoreButton from "./FetchMoreButton";
import { ErrorBoundary } from "react-error-boundary";
import Post from "./post/Post";
import { usePaginatedPosts } from "@/hooks/usePaginatedPosts";

const Feed: React.FC<{}> = ({}) => {
  const { data, hasMore, handleFetchMore } = usePaginatedPosts();

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
