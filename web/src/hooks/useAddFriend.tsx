import {
  MeDocument,
  FriendStatusDocument,
  AddFriendDocument,
  AcceptFriendDocument,
  FriendStatus,
} from "@/generated/graphql";
import { cn } from "@/lib/utils";
import { useSuspenseQuery, useMutation } from "@apollo/client";
import { AiOutlineUserAdd } from "react-icons/ai";

export const useAddFriend = (
  id: number
): [addFriendButton: React.JSX.Element | null] => {
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

  if (me?.id === id) {
    return [null];
  }

  const addFriendButtonStyle = "flex items-center gap-1";

  if (friendStatus === FriendStatus.Friends) {
    return [<div className={cn(addFriendButtonStyle)}>Friends</div>];
  } else if (friendStatus === FriendStatus.InviteSent) {
    return [<div className={cn(addFriendButtonStyle)}>Invite Sent</div>];
  } else if (friendStatus === FriendStatus.InviteReceived) {
    return [
      <button
        className={cn(addFriendButtonStyle)}
        onClick={async () => {
          const result = await acceptFriend();
        }}
      >
        <AiOutlineUserAdd />
        <div>Accept Invitation</div>
      </button>,
    ];
  }

  return [
    <button
      className={cn(addFriendButtonStyle)}
      onClick={async () => {
        const result = await addFriend();
      }}
    >
      <AiOutlineUserAdd />
      <div>Add Friend</div>
    </button>,
  ];
};
