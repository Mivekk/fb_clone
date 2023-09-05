"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GoogleWrapper: React.FC<Props> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleWrapper;
