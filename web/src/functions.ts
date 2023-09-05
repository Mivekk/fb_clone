import { MeDocument } from "./generated/graphql";
import { getClient } from "./lib/client";
import { getAccessToken } from "./token";

export const getUser = async () => {
  return getClient().query({
    query: MeDocument,
    fetchPolicy: "network-only",
  });
};
