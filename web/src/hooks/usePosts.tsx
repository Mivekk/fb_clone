import {
  PaginatedPostsDocument,
  PaginatedPostsQuery,
} from "@/generated/graphql";
import { POST_TAKE_COUNT } from "@/utils/constants";
import {
  useQuery,
  useSuspenseQuery,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const usePosts = (): {
  data: PaginatedPostsQuery;
  hasMore: boolean;
  handleFetchMore: () => void;
} => {
  const { data, fetchMore } = useSuspenseQuery(PaginatedPostsDocument, {
    variables: { take: POST_TAKE_COUNT },
  });

  let hasMore = data?.paginatedPosts.hasMore ?? false;
  const handleFetchMore = async () => {
    if (!data) {
      return;
    }

    const posts = data.paginatedPosts.posts;

    const result = await fetchMore({
      variables: {
        cursor: { id: posts[posts.length - 1].id },
        take: POST_TAKE_COUNT,
      },
    });

    hasMore = result.data.paginatedPosts.hasMore;
  };

  return { data, hasMore, handleFetchMore };
};
