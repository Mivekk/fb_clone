"use client";

import { TAKE_AMOUNT } from "@/constants";
import {
  MeDocument,
  PostsDocument,
  UdpatePostDocument,
} from "@/generated/graphql";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import React, { Suspense, useEffect, useState } from "react";
import Post from "./Post";
import { accessToken, setAccessToken } from "@/token";

export const Feed: React.FC<{}> = () => {
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const { data, fetchMore, subscribeToMore } = useSuspenseQuery(PostsDocument, {
    variables: { take: TAKE_AMOUNT, orderBy: { id: "desc" } as any },
  });

  const { data: meData, refetch } = useQuery(MeDocument, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    subscribeToMore({
      document: UdpatePostDocument,
    });
  }, []);

  const postsElements = data.posts.map((post) => {
    return (
      <Suspense key={post.id} fallback={<div>loading...</div>}>
        <Post {...post} />
      </Suspense>
    );
  });

  return (
    <>
      <button
        onClick={async () => {
          setAccessToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2OTA0OTc5NjEsImV4cCI6MTY5MDQ5ODAyMX0.X0th1zhL1mU7XyCCW2gWXt7ufI5hIHa_Qgjb0M9__3E"
          );

          const response = await refetch();

          console.log(accessToken);

          console.log(response);
        }}
      >
        elo
      </button>
      <div className="flex flex-col items-center mt-2">
        {postsElements}
        {hasMorePosts ? (
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  cursor: { id: data.posts[data.posts.length - 1].id },
                  take: TAKE_AMOUNT,
                  skip: 1,
                },
              }).then((res) => {
                if (!res.data.posts.length) {
                  setHasMorePosts(false);
                }
              });
            }}
            className="w-40 h-10 border border-[#e1e3e6] rounded-md bg-white m-2 mb-4"
          >
            Fetch more!
          </button>
        ) : (
          <div className="m-2 mb-4">No more posts!</div>
        )}
      </div>
    </>
  );
};
