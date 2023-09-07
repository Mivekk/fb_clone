import React from "react";
import Login from "./components/Login";
import { getUser } from "@/functions";
import { redirect } from "next/navigation";

const Auth: React.FC<{}> = async ({}) => {
  const user = await getUser();

  if (user.data.me) {
    redirect("/");
  }

  return (
    <div>
      <Login />
    </div>
  );
};

export default Auth;
