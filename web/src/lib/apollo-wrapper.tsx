"use client";

import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { makeApolloLink } from "./makeApolloLink";

function makeClient() {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            paginatedPosts: {
              keyArgs: false,
              merge(existing: any = [], incoming: any, { readField }) {
                const merged = existing.posts ?? [];

                const existingIdSet = new Set(
                  merged.map((post: any) => readField("id", post))
                );

                const newPosts = incoming.posts.filter(
                  (post: any) => !existingIdSet.has(readField("id", post))
                );

                let posts: any = [];
                if (
                  merged[0] &&
                  newPosts[0] &&
                  readField("id", merged[0])! < readField("id", newPosts[0])!
                ) {
                  posts = [...newPosts, ...merged];
                } else {
                  posts = [...merged, ...newPosts];
                }

                return {
                  hasMore: incoming.hasMore,
                  posts,
                };
              },
            },
            paginatedComments: {
              keyArgs: ["postId"],
              merge(existing: any = [], incoming: any, { readField }) {
                const merged = existing.comments ?? [];

                const existingIdSet = new Set(
                  merged.map(({ comment }: any) => readField("id", comment))
                );

                const newComments = incoming.comments.filter(
                  ({ comment }: any) =>
                    !existingIdSet.has(readField("id", comment))
                );

                let comments: any = [];
                if (
                  merged[0] &&
                  newComments[0] &&
                  readField("id", merged[0].comment)! <
                    readField("id", newComments[0].comment)!
                ) {
                  comments = [...newComments, ...merged];
                } else {
                  comments = [...merged, ...newComments];
                }

                return {
                  hasMore: incoming.hasMore,
                  commentCount: incoming.commentCount,
                  comments,
                };
              },
            },
          },
        },
      },
    }),
    connectToDevTools: true,
    link: makeApolloLink(),
  });
}

type Props = {
  children: React.ReactNode;
};

export function ApolloWrapper({ children }: Props) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
