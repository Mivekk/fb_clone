import {
  PaginatedPostsDocument,
  PaginatedPostsQuery,
} from "@/generated/graphql";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const TAKE_AMOUNT = 5;

export const usePaginatedPosts = (): {
  data: PaginatedPostsQuery | undefined;
  hasMore: boolean;
  handleFetchMore: () => void;
} => {
  const { data, fetchMore } = useQuery(PaginatedPostsDocument, {
    variables: { take: TAKE_AMOUNT },
  });

  let hasMore = data?.paginatedPosts.hasMore ?? false;
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
