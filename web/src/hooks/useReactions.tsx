import {
  ReactionsDocument,
  type ReactionsQuery,
  UpdateReactionsDocument,
} from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { useEffect } from "react";

export const useReactions = ({
  postId,
}: {
  postId: number;
}): { data: ReactionsQuery } => {
  const { data, subscribeToMore } = useSuspenseQuery(ReactionsDocument, {
    variables: { postId },
  });

  useEffect(() => {
    subscribeToMore({
      document: UpdateReactionsDocument,
      variables: { postId },
      updateQuery(prev, { subscriptionData }) {
        const updatedData = subscriptionData.data.updateReactions;
        if (!updatedData) {
          return prev;
        }

        return { reactions: updatedData };
      },
    });
  }, []);

  return { data };
};
