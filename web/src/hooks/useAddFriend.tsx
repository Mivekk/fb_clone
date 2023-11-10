import {
  MeDocument,
  FriendStatusDocument,
  AddFriendDocument,
  AcceptFriendDocument,
  FriendStatus,
  AddFriendMutation,
  AcceptFriendMutation,
} from "@/generated/graphql";
import { cn } from "@/lib/utils";
import { useSuspenseQuery, useMutation, FetchResult } from "@apollo/client";
import { AiOutlineUserAdd } from "react-icons/ai";

export const useAddFriend = (
  id: number
): {
  friendStatus: FriendStatus | null;
  addFriend: () => Promise<FetchResult<AddFriendMutation>>;
  acceptFriend: () => Promise<FetchResult<AcceptFriendMutation>>;
} => {
  const {
    data: { me },
  } = useSuspenseQuery(MeDocument);

  const {
    data: { friendStatus },
  } = useSuspenseQuery(FriendStatusDocument, { variables: { userId: id } });

  const [addFriend] = useMutation(AddFriendDocument, {
    variables: { userId: id },
  });

  const [acceptFriend] = useMutation(AcceptFriendDocument, {
    variables: { userId: id },
  });

  return { friendStatus, addFriend, acceptFriend };
};
