import React from "react";
import Login from "./components/Login";
import fbName from "../../../public/fb-name.svg";
import Image from "next/image";
import { Dialog, DialogContent } from "../components/ui/dialog";
import Register from "./components/Register";

const Auth: React.FC<{}> = async ({}) => {
  // const user = await getUser();

  // if (user.data.me) {
  //   redirect("/");
  // }

  return (
    <div className="w-full h-screen ">
      <div className="w-full h-4/5 bg-gray-100 flex lg:flex-row flex-col justify-center items-center lg:gap-[13rem]">
        <div className="text-2xl lg:w-[25rem] md:w-[22rem] w-[18rem]">
          <Image
            src={fbName}
            alt="facebook name"
            className="lg:-translate-x-10"
          />
          <div className="-translate-y-8 lg:block hidden">
            Connect with friends and the world around you on Facebook.
          </div>
        </div>
        <Dialog>
          <Login />
          <Register />
        </Dialog>
      </div>
    </div>
  );
};

export default Auth;
