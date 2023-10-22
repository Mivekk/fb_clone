import {
  PaginatedCommentsDocument,
  PaginatedCommentsQuery,
  UpdateCommentsDocument,
} from "@/generated/graphql";
import { COMMENT_TAKE_COUNT } from "@/utils/constants";
import { useSuspenseQuery } from "@apollo/client";
import { useEffect } from "react";

export const useComments = ({
  postId,
}: {
  postId: number;
}): {
  data: PaginatedCommentsQuery;
  hasMore: boolean;
  handleFetchMore: () => void;
} => {
  const { data, subscribeToMore, fetchMore } = useSuspenseQuery(
    PaginatedCommentsDocument,
    { variables: { postId, take: COMMENT_TAKE_COUNT } }
  );

  const comments = data.paginatedComments.comments;

  useEffect(() => {
    subscribeToMore({
      document: UpdateCommentsDocument,
      variables: { postId, cursor: comments[comments.length - 1]?.comment.id },
      updateQuery(prev, { subscriptionData }) {
        const updatedData = subscriptionData.data.updateComments;
        if (!updatedData) {
          return prev;
        }

        return {
          paginatedComments: {
            ...updatedData,
            hasMore: prev.paginatedComments.hasMore,
          },
        };
      },
    });
  }, []);

  let hasMore = data?.paginatedComments.hasMore ?? false;
  const handleFetchMore = async () => {
    if (!data) {
      return;
    }

    const comments = data.paginatedComments.comments;

    const result = await fetchMore({
      variables: {
        cursor: { id: comments[comments.length - 1].comment.id },
        take: COMMENT_TAKE_COUNT,
      },
    });

    hasMore = result.data.paginatedComments.hasMore;
  };

  return { data, hasMore, handleFetchMore };
};
