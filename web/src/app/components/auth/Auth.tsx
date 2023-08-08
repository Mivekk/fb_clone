import React from "react";
import { LoginForm } from "./LoginForm";

export const Auth: React.FC<{}> = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <div className="flex w-full h-[640px] bg-[#f0f2f5] justify-center items-center">
        <div className="flex justify-between gap-24 mb-20">
          <div className="flex items-center w-[26rem] text-[25px] leading-8">
            Connect with friends and the world around you on Facebook.
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
