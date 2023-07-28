"use client";

import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const InputField: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="w-[92%] h-12 p-4 shadow-sm rounded-md border border-[#dddfe2]"
    />
  );
};

export default InputField;
