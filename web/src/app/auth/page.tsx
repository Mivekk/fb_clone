import React from "react";
import Login from "./components/Login";
import { getUser } from "@/functions";
import { redirect } from "next/navigation";
import Register from "./components/Register";

const Auth: React.FC<{}> = async ({}) => {
  // const user = await getUser();

  // if (user.data.me) {
  //   redirect("/");
  // }

  return (
    <div className="flex gap-12">
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
