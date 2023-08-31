import { MeDocument } from "./generated/graphql";
import { getClient } from "./lib/client";

export const getUser = async () => {
  return getClient().query({ query: MeDocument });
};
