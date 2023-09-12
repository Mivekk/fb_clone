"use client";

import React from "react";
import { useFeed } from "@/hooks/useFeed";
import FetchMoreButton from "./FetchMoreButton";
import { ErrorBoundary } from "react-error-boundary";
import Post from "./post/Post";

const Feed: React.FC<{}> = ({}) => {
  const { data, loading, fetchMore } = useFeed();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No posts available!</div>;
  }

  const posts = data.posts.map((post) => {
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
      <FetchMoreButton onClick={() => fetchMore()} />
    </div>
  );
};

export default Feed;
