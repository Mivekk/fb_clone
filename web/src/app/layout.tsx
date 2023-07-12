import "./globals.css";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import type { Metadata } from "next";

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
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
