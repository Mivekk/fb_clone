"use client";

import { LoginDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Authenticate: React.FC<{}> = ({}) => {
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

        if (result.errors) {
          console.log(result.errors);
        }

        router.refresh();

        router.push("/");
      }}
      className="flex flex-col w-[200px]"
    >
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

export default Authenticate;
