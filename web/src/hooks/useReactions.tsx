import {
  ReactionsDocument,
  UdpatePostDocument,
  type ReactionsQuery,
} from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { useEffect } from "react";

export const useReactions = ({
  postId,
}: {
  postId: number;
}): { data: ReactionsQuery } => {
  const { data, subscribeToMore } = useSuspenseQuery(ReactionsDocument, {
    variables: { where: { postId: { equals: postId } } },
  });

  useEffect(() => {
    subscribeToMore({
      document: UdpatePostDocument,
      updateQuery(prev, { subscriptionData }) {
        const updatedData = subscriptionData.data.udpatePost;
        if (!updatedData || updatedData.id !== postId) {
          return prev;
        }

        return { reactions: updatedData.reactions };
      },
    });
  }, []);

  return { data };
};
