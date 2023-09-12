import {
  CommentsDocument,
  PostsDocument,
  PostsQuery,
  UdpatePostDocument,
} from "@/generated/graphql";
import { useSubscription } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const TAKE_COUNT = 5;

export const useFeed = (): {
  data: PostsQuery | undefined;
  loading: boolean;
  fetchMore: () => Promise<boolean>;
} => {
  const { data, loading, fetchMore } = useQuery(PostsDocument, {
    variables: { take: TAKE_COUNT, orderBy: { id: "desc" } as any },
  });

  useSubscription(UdpatePostDocument, {
    onData: ({ data: subscriptionData, client }) => {
      if (!subscriptionData.data?.udpatePost) {
        return;
      }

      client.cache.updateQuery(
        {
          query: CommentsDocument,
          variables: {
            where: { postId: { equals: subscriptionData.data.udpatePost.id } },
          },
        },
        (_data) => ({
          comments: subscriptionData.data!.udpatePost!.comments,
        })
      );
    },
  });

  const handleFetchMore = async (): Promise<boolean> => {
    if (!data) {
      return false;
    }

    const result = await fetchMore({
      variables: {
        cursor: { id: data.posts[data.posts.length - 1].id },
        take: TAKE_COUNT,
        skip: 1,
      },
    });

    if (result.data.posts.length !== TAKE_COUNT) {
      return false;
    }

    return true;
  };

  return { data, loading, fetchMore: handleFetchMore };
};
