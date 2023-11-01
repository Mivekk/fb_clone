"use client";

import { LogoutDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React from "react";

const Logout: React.FC<{}> = ({}) => {
  const router = useRouter();

  const [logout, { client }] = useMutation(LogoutDocument);

  const handleLogout = async () => {
    console.log("logging out...");

    const result = await logout();

    console.log("logout result - ", result);

    client.resetStore();

    router.refresh();
    router.push("/auth");
  };

  return (
    <button className="w-full h-full flex" onClick={() => handleLogout()}>
      Logout
    </button>
  );
};

export default Logout;
