"use client";

import { LoginDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File>();

  const [login] = useMutation(LoginDocument);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await login({
      variables: { data: { email, password } },
    });

    if (result.errors) {
      console.log(result.errors);
      return;
    }

    router.refresh();
    router.push("/");
  };

  const onGoogleLogin = async (credentialsResponse: CredentialResponse) => {
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
      onSubmit={async (e) => onSubmit(e)}
      className="flex flex-col w-[200px]"
    >
      <GoogleLogin
        onSuccess={(credentialResponse) => onGoogleLogin(credentialResponse)}
        onError={() => {
          throw new Error("error");
        }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default Login;
