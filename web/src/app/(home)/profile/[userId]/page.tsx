import { UserDocument } from "@/generated/graphql";
import { getClient } from "@/lib/client";
import React from "react";
import ProfileName from "./components/ProfileName";

type ProfileProps = {
  params: { userId: string };
};

const getUser = (userId: number) => {
  return getClient().query({
    query: UserDocument,
    variables: { where: { id: userId } },
  });
};

const Profile: React.FC<ProfileProps> = async ({ params }) => {
  const { data } = await getUser(Number(params.userId));

  if (!data.user?.id) {
    throw new Error("user not found");
  }

  return (
    <div>
      <ProfileName
        firstName={data.user.firstName}
        lastName={data.user.lastName}
        image_url={data.user.image_url}
      />
    </div>
  );
};

export default Profile;
