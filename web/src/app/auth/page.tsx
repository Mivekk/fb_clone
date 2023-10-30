import React from "react";
import Login from "./components/Login";
import fbName from "../../../public/fb-name.svg";
import Image from "next/image";

const Auth: React.FC<{}> = async ({}) => {
  // const user = await getUser();

  // if (user.data.me) {
  //   redirect("/");
  // }

  return (
    <div className="w-full h-screen ">
      <div className="w-full h-4/5 bg-gray-100 flex justify-center items-center gap-[16rem]">
        <div className="text-2xl w-[25rem]">
          <Image src={fbName} alt="facebook name" className="-translate-x-10" />
          <div className="-translate-y-8">
            Connect with friends and the world around you on Facebook.
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Auth;
