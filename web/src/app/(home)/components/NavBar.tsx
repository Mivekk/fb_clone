"use client";

import { getUser } from "@/functions";
import React from "react";
import Logout from "./Logout";
import { MeDocument, UserFieldsFragmentDoc } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const NavBar: React.FC<{}> = ({}) => {
  const user = useSuspenseQuery(MeDocument, { fetchPolicy: "network-only" });

  return (
    <div className="w-full h-12 bg-gray-400">
      Hello {user.data.me?.firstName} {user.data.me?.lastName}
      <Logout />
    </div>
  );
};

export default NavBar;
