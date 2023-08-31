import { getUser } from "@/functions";
import React from "react";

const NavBar: React.FC<{}> = async ({}) => {
  const user = await getUser();

  return (
    <div className="w-full h-12 bg-gray-400">
      Hello {user.data.me?.firstName}
    </div>
  );
};

export default NavBar;
