"use client";

import { setAccessToken } from "@/token";

type Props = {
  accessToken: string;
  children: React.ReactNode;
};

const TokenWrapper: React.FC<Props> = ({ accessToken, children }) => {
  setAccessToken(accessToken);

  return <>{children}</>;
};

export default TokenWrapper;
