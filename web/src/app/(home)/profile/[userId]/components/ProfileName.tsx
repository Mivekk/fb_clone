"use client";

import { Avatar } from "@/app/components/ui/avatar";
import React from "react";

type ProfileNameType = {
  firstName: string;
  lastName: string;
  image_url?: string | null;
};

const ProfileName: React.FC<ProfileNameType> = ({
  firstName,
  lastName,
  image_url,
}) => {
  return (
    <div className="flex items-center just gap-2 p-2">
      <Avatar image_url={image_url} className="w-24 h-24" />
      <div className="text-3xl font-semibold">
        {firstName} {lastName}
      </div>
    </div>
  );
};

export default ProfileName;
