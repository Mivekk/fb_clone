"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { AiOutlineUserAdd } from "react-icons/ai";
import React from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { MeDocument } from "@/generated/graphql";

type ProfileNameType = {
  id: number;
  firstName: string;
  lastName: string;
  image_url?: string | null;
};

const ProfileName: React.FC<ProfileNameType> = ({
  id,
  firstName,
  lastName,
  image_url,
}) => {
  const {
    data: { me },
  } = useSuspenseQuery(MeDocument);

  return (
    <div className="w-full flex">
      <div className="flex items-center just gap-2 p-2">
        <Avatar image_url={image_url} className="w-24 h-24" />
        <div className="text-3xl font-semibold">
          {firstName} {lastName}
        </div>
      </div>
      {me?.id !== id && (
        <button className="ml-auto mt-auto mr-4 mb-4 px-2 py-1 h-fit bg-blue-600 text-white rounded-md flex items-center">
          <AiOutlineUserAdd />
          Invite to friends
        </button>
      )}
    </div>
  );
};

export default ProfileName;
