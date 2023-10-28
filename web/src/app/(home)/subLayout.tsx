"use client";

import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { cn } from "@/lib/utils";

const SubLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn(theme)}>
      <NavBar />
      {children}
    </div>
  );
};

export default SubLayout;
