import {
  PaginatedCommentsDocument,
  PaginatedCommentsQuery,
  UdpatePostDocument,
} from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { useEffect } from "react";

const TAKE_AMOUNT = 5;

export const useComments = ({
  postId,
}: {
  postId: number;
}): { data: PaginatedCommentsQuery } => {
  const { data, subscribeToMore } = useSuspenseQuery(
    PaginatedCommentsDocument,
    { variables: { where: { postId: { equals: postId } }, take: TAKE_AMOUNT } }
  );

  useEffect(() => {
    subscribeToMore({
      document: UdpatePostDocument,
      updateQuery(prev, { subscriptionData }) {
        const updatedData = subscriptionData.data.udpatePost;
        if (!updatedData || updatedData.id !== postId) {
          return prev;
        }

        const newComment = updatedData.comments.filter(
          (comment) =>
            !prev.paginatedComments.comments.filter(
              (x) => x.comment === comment
            )
        );

        // return {
        //   paginatedComments: {
        //     hasMore: prev.paginatedComments.hasMore,
        //     comments: updatedData.comments.map((comment) => ({
        //       comment,
        //       hasReplies: false,
        //     })),
        //   },
        // };
        return prev;
      },
    });
  }, []);

  return { data };
};
