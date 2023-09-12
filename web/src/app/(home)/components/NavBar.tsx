import { getUser } from "@/functions";
import React from "react";
import Logout from "./Logout";
import { UserFieldsFragmentDoc } from "@/generated/graphql";

const NavBar: React.FC<{}> = async ({}) => {
  const user = await getUser();

  return (
    <div className="w-full h-12 bg-gray-400">
      Hello {user.data.me?.firstName} {user.data.me?.lastName}
      <Logout />
    </div>
  );
};

export default NavBar;
