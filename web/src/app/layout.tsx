import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/dist/client/components/headers";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { setAccessToken } from "@/token";
import TokenWrapper from "@/wrapper/TokenWrapper";
import GoogleWrapper from "@/lib/google-wrapper";

export const metadata: Metadata = {
  title: "fb-clone",
  description: "fb-clone",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const refreshTokenData = await fetch(
    "http://localhost:4000/auth/refresh-token",
    {
      method: "POST",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    }
  );

  const data = await refreshTokenData.json();

  const accessToken = data.accessToken;

  setAccessToken(accessToken);

  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <TokenWrapper accessToken={accessToken}>
            <GoogleWrapper>{children}</GoogleWrapper>
          </TokenWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
