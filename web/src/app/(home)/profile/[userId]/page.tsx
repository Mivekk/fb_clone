import { MeDocument, UserDocument } from "@/generated/graphql";
import { getClient } from "@/lib/client";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";

type ProfileProps = {
  params: { userId: string };
};

const getUser = (userId: number) => {
  return getClient().query({
    query: UserDocument,
    variables: { userId },
  });
};

const Profile: React.FC<ProfileProps> = async ({ params }) => {
  const {
    data: { user },
  } = await getUser(Number(params.userId));

  if (!user?.id) {
    throw new Error("user not found");
  }

  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-[#18191A]">
      <div className="w-full flex justify-center">
        <div className="w-[64rem] mt-4 bg-white dark:bg-[#202122] rounded-2xl flex">
          <ProfileHeader {...user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
