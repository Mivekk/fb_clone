"use client";

import { LoginDocument } from "@/generated/graphql";
import { setAccessToken } from "@/token";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {}

const Form: React.FC<Props> = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LoginDocument);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const result = await login({
          variables: { data: { email, password } },
        });

        const accessToken = result.data?.login.accessToken;

        if (accessToken) {
          setAccessToken(accessToken);
        }

        router.push("/");
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-black"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-black"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
