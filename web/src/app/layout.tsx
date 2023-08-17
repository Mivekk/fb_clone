import "./globals.css";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { setAccessToken } from "@/token";
import type { Metadata } from "next";
import { cookies } from "next/dist/client/components/headers";

export const metadata: Metadata = {
  title: "Facebook clone",
  description: "Facebook clone",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const refreshTokenData = await fetch("http://localhost:4000/refresh_token", {
    method: "POST",
    credentials: "include",
    headers: { Cookie: cookies().toString() },
  });

  const data = await refreshTokenData.json();

  const accessToken = data.accessToken;

  setAccessToken(accessToken);

  return (
    <html lang="en">
      <body className="bg-[#f0f2f5]">
        <ApolloWrapper accessToken={accessToken}>{children}</ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
