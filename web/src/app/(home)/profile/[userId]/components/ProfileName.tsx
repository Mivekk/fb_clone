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
    <div className="flex items-end gap-2">
      <Avatar image_url={image_url} className="w-24 h-24" />
      <div className="text-xl font-semibold">
        {firstName} {lastName}
      </div>
    </div>
  );
};

export default ProfileName;
