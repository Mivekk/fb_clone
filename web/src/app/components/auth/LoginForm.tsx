"use client";

import { LoginDocument } from "@/generated/graphql";
import { setAccessToken } from "@/token";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { InputField } from "./InputField";

const LoginForm: React.FC<{}> = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LoginDocument);

  return (
    <div className="w-[22.6rem] h-[19.5rem] rounded-lg shadow-xl bg-white">
      <div className="flex flex-col w-90%">
        <form
          className="flex flex-col gap-3 items-center mt-4"
          onSubmit={async (e) => {
            e.preventDefault();

            const result = await login({
              variables: { data: { email, password } },
            });

            if (result.data?.login.accessToken) {
              console.log("login form", result.data.login.accessToken);

              setAccessToken(result.data.login.accessToken);

              router.refresh();
            }
          }}
        >
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-[92%] h-11 bg-[#1878f2] rounded-md text-white text-xl font-semibold">
            Log In
          </button>
        </form>
        <Link href={"/lol"} className="mt-3 text-blue-500 text-sm self-center">
          Forgot password?
        </Link>
        <div className="w-[90%] h-[1px] bg-slate-500 self-center opacity-30 mt-4"></div>
        <div
          className="flex justify-center items-center w-[10.75rem] rounded-md h-11 self-center 
                        mt-6 text-white bg-[#42b72a] font-semibold"
        >
          Create new account
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
