import {
  PaginatedPostsDocument,
  PaginatedPostsQuery,
  UdpatePostDocument,
} from "@/generated/graphql";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect } from "react";

const TAKE_AMOUNT = 5;

export const usePaginatedPosts = (): {
  data: PaginatedPostsQuery | undefined;
  hasMore: boolean;
  handleFetchMore: () => void;
} => {
  const { data, subscribeToMore, fetchMore } = useQuery(
    PaginatedPostsDocument,
    {
      variables: { take: TAKE_AMOUNT },
    }
  );

  useEffect(() => {
    subscribeToMore({
      document: UdpatePostDocument,
      updateQuery: (prev, { subscriptionData }) => {
        return prev;
      },
    });
  }, []);

  let hasMore: boolean = data?.paginatedPosts.hasMore ?? false;

  const handleFetchMore = async () => {
    if (!data) {
      return;
    }

    const posts = data.paginatedPosts.posts;

    const result = await fetchMore({
      variables: {
        cursor: posts[posts.length - 1].id,
        take: TAKE_AMOUNT,
      },
    });

    hasMore = result.data.paginatedPosts.hasMore;
  };

  return { data, hasMore, handleFetchMore };
};
