"use client";

import { LogoutDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React from "react";

const Logout: React.FC<{}> = ({}) => {
  const router = useRouter();

  const [logout, { client }] = useMutation(LogoutDocument);

  const handleLogout = () => {
    logout();

    client.resetStore();

    router.refresh();
    router.push("/auth");
  };

  return <button onClick={() => handleLogout()}>Logout</button>;
};

export default Logout;
