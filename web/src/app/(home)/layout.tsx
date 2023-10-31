import ThemeProvider from "@/contexts/ThemeProvider";
import React from "react";
import SubLayout from "./subLayout";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SubLayout>{children}</SubLayout>
    </ThemeProvider>
  );
};

export default HomeLayout;
