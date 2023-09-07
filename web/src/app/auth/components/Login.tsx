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
  const [login] = useMutation(LoginDocument);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await login({
      variables: { data: { email, password } },
    });

    if (result.errors) {
      console.log(result.errors);
    }

    router.refresh();
    router.push("/");
  };

  const authGoogle = async (credentialsResponse: CredentialResponse) => {
    if (!credentialsResponse.credential) {
      throw new Error("error");
    }

    const result = await fetch("http://localhost:4000/auth/google", {
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
      onSubmit={async (e) => submitForm(e)}
      className="flex flex-col w-[200px]"
    >
      <GoogleLogin
        onSuccess={(credentialResponse) => authGoogle(credentialResponse)}
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
      <button>Submit</button>
    </form>
  );
};

export default Login;
