import "./globals.css";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import type { Metadata } from "next";
import { getClient } from "@/lib/client";
import { MeDocument } from "@/generated/graphql";
import { setAccessToken } from "@/token";
import { cookies } from "next/dist/client/components/headers";
import Auth from "./components/Auth";

export const metadata: Metadata = {
  title: "Facebook clone",
  description: "Facebook clone",
};

export const revalidate = 60;

const getUser = async () => {
  return getClient().query({ query: MeDocument, fetchPolicy: "network-only" });
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const refreshTokenData = await fetch("http://localhost:4000/refresh_token", {
    method: "POST",
    credentials: "include",
    headers: { Cookie: cookies().toString() },
  });

  const data = await refreshTokenData.json();

  console.log(data.accessToken);

  setAccessToken(data.accessToken);

  const user = await getUser();

  return (
    <html lang="en">
      <body className="bg-[#f0f2f5]">
        <ApolloWrapper>{user.data.me ? children : <Auth />}</ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
