import "./globals.css";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import type { Metadata } from "next";
import TokenWrapper from "./utils/TokenWrapper";

export const metadata: Metadata = {
  title: "Facebook clone",
  description: "Facebook clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f0f2f5]">
        <ApolloWrapper>
          <TokenWrapper>{children}</TokenWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
