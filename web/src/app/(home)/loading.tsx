"use client";

import React from "react";
import { Oval } from "react-loader-spinner";

const Loading: React.FC<{}> = ({}) => {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-[#18191A] flex justify-center items-center">
      <Oval width={30} height={30} color="white" secondaryColor="grey" />
    </div>
  );
};

export default Loading;
