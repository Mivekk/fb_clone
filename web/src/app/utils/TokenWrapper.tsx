import { setAccessToken } from "@/token";
import { cookies } from "next/dist/client/components/headers";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const TokenWrapper: React.FC<Props> = async ({ children }) => {
  const refreshTokenData = await fetch("http://localhost:4000/refresh_token", {
    method: "POST",
    credentials: "include",
    headers: { Cookie: cookies().toString() },
  });

  const data = await refreshTokenData.json();

  setAccessToken(data);

  return <>{children}</>;
};

export default TokenWrapper;
