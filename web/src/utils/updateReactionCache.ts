import { ReactionType, ReactionsDocument } from "@/generated/graphql";
import { type ApolloClient } from "@apollo/client";

export const updateReactionCache = ({
  postId,
  client,
  reactionType,
}: {
  postId: number;
  client: ApolloClient<object>;
  reactionType: ReactionType;
}) => {
  client.cache.updateQuery(
    { query: ReactionsDocument, variables: { postId } },
    (data) => {
      if (!data) {
        return data;
      }

      return {
        reactions: {
          ...data.reactions,
          voted: data.reactions.voted === reactionType ? null : reactionType,
        },
      };
    }
  );
};
