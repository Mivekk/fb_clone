import {
  PaginatedCommentsDocument,
  PaginatedCommentsQuery,
  UpdateCommentsDocument,
} from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { useEffect } from "react";

const TAKE_AMOUNT = 3;

export const useComments = ({
  postId,
}: {
  postId: number;
}): { data: PaginatedCommentsQuery } => {
  const { data, subscribeToMore } = useSuspenseQuery(
    PaginatedCommentsDocument,
    { variables: { where: { postId: { equals: postId } }, take: TAKE_AMOUNT } }
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

        return { paginatedComments: updatedData };
      },
    });
  }, []);

  return { data };
};
