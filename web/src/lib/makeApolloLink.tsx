import { getAccessToken, setAccessToken } from "@/token";
import { HttpLink, split, ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { createClient } from "graphql-ws";
import { jwtDecode } from "jwt-decode";

export const makeApolloLink = (): ApolloLink | undefined => {
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
        const { exp } = jwtDecode(token) as any;

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
      console.warn("Your refresh token is invalid. Try to relogin");
      console.error(err);
    },
  });

  return typeof window === "undefined"
    ? ApolloLink.from([
        new SSRMultipartLink({
          stripDefer: true,
        }),
        tokenLink,
        authLink,
        splitLink,
      ])
    : ApolloLink.from([tokenLink, authLink, splitLink]);
};
