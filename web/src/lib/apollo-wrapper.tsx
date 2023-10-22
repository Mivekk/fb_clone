"use client";

import { getAccessToken, setAccessToken } from "@/token";
import { getRefValue } from "@/utils/getRefValue";
import { ApolloLink, HttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { createClient } from "graphql-ws";
import jwt_decode from "jwt-decode";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${getAccessToken()}`,
      },
    };
  });

  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            url: "ws://localhost:4000/graphql",
          })
        )
      : null;

  const splitLink =
    wsLink !== null
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === "OperationDefinition" &&
              definition.operation === "subscription"
            );
          },
          wsLink,
          httpLink
        )
      : httpLink;

  const tokenLink = new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: async () => {
      const token = getAccessToken();

      if (!token) {
        return true;
      }

      try {
        const { exp } = jwt_decode(token) as any;

        if (Date.now() >= exp * 1000) {
          return false;
        } else {
          return true;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    fetchAccessToken: () => {
      return fetch("http://localhost:4000/api/auth/refresh-token", {
        method: "POST",
        credentials: "include",
      });
    },
    handleFetch: (accessToken) => {
      setAccessToken(accessToken);
    },
    handleError: (err) => {
      // full control over handling token fetch Error
      console.warn("Your refresh token is invalid. Try to relogin");
      console.error(err);
    },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            paginatedPosts: {
              keyArgs: false,
              merge(existing = [], incoming) {
                const existingPosts = existing.posts ?? [];
                const incomingPosts = incoming.posts;

                return {
                  hasMore: incoming.hasMore,
                  posts: [...existingPosts, ...incomingPosts],
                };
              },
            },
            paginatedComments: {
              keyArgs: ["postId"],
              merge(existing = [], incoming) {
                const existingComments: any[] = existing.comments ?? [];
                const incomingComments: any[] = incoming.comments;

                const comments = [...existingComments];

                incomingComments.forEach((inc) => {
                  if (
                    !comments.find((c) => c.comment.__ref === inc.comment.__ref)
                  ) {
                    if (
                      comments.length > 0 &&
                      getRefValue(8, comments[0].comment.__ref) <
                        getRefValue(8, inc.comment.__ref)
                    ) {
                      comments.unshift(inc);
                    } else {
                      comments.push(inc);
                    }
                  }
                });

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
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            tokenLink,
            authLink,
            splitLink,
          ])
        : ApolloLink.from([tokenLink, authLink, splitLink]),
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
