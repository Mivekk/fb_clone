import { getUser } from "@/functions";
import { getAccessToken } from "@/token";
import React from "react";
import Logout from "./Logout";

const NavBar: React.FC<{}> = async ({}) => {
  const user = await getUser();

  return (
    <div className="w-full h-12 bg-gray-400">
      Hello {user.data.me?.firstName}
      <Logout />
    </div>
  );
};

export default NavBar;
