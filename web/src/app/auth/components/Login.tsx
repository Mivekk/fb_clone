"use client";

import { LoginDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { DialogTrigger } from "@/app/components/ui/dialog";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LoginDocument);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await login({
      variables: { data: { email, password } },
    });

    if (result.errors || result.data?.login.error || !result.data?.login.user) {
      console.log(result.errors);
      return;
    }

    router.refresh();
    router.push("/");
  };

  const handleGoogleLogin = async (credentialsResponse: CredentialResponse) => {
    if (!credentialsResponse.credential) {
      throw new Error("error");
    }

    const result = await fetch("http://localhost:4000/api/auth/google", {
      credentials: "include",
      method: "POST",
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify(credentialsResponse),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      console.log(result);
    }

    router.refresh();
    router.push("/");
  };

  return (
    <form
      onSubmit={async (e) => handleSubmit(e)}
      className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md"
    >
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col gap-2 w-[22rem]">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              href={"/forgot-password"}
              className="text-sm text-blue-600 ml-1"
            >
              Forgot passsword?
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <Button className="w-[9rem] bg-blue-600" type="submit">
            Log In
          </Button>
          <div>or</div>
          <DialogTrigger asChild>
            <Button className="bg-green-600" type="button">
              Create New Account
            </Button>
          </DialogTrigger>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 opacity-50" />
      <div className="self-center flex flex-col items-center gap-2">
        <div className="text-sm -mt-1">Social Sign Up</div>
        <GoogleLogin
          onSuccess={(credentialResponse) =>
            handleGoogleLogin(credentialResponse)
          }
          onError={() => {
            throw new Error("could not login through google");
          }}
        />
      </div>
    </form>
  );
};

export default Login;
