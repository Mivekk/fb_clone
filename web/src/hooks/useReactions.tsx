import {
  ReactionsDocument,
  type ReactionsQuery,
  UpdateReactionsDocument,
  MeDocument,
} from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
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

        return {
          reactions: {
            ...updatedData,
            voted: prev.reactions.voted,
          },
        };
      },
    });
  }, []);

  return { data };
};
