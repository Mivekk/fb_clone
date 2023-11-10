"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { FriendStatus } from "@/generated/graphql";
import { useAddFriend } from "@/hooks/useAddFriend";
import React from "react";

type ProfileHeaderType = {
  id: number;
  firstName: string;
  lastName: string;
  image_url?: string | null;
};

const ProfileHeader: React.FC<ProfileHeaderType> = ({
  id,
  firstName,
  lastName,
  image_url,
}) => {
  const { friendStatus, addFriend, acceptFriend } = useAddFriend(id);

  const friendButton = !friendStatus ? null : "a";

  return (
    <div className="w-full flex">
      <div className="flex items-center just gap-2 p-2">
        <Avatar image_url={image_url} className="w-24 h-24" />
        <div className="text-3xl font-semibold dark:text-white">
          {firstName} {lastName}
        </div>
      </div>
      <div className="ml-auto mt-auto mr-4 mb-4 px-2 py-1 h-fit bg-blue-600 text-white rounded-md">
        {friendStatus}
      </div>
    </div>
  );
};

export default ProfileHeader;
