"use client";

import React, { createContext, useState, Dispatch, useEffect } from "react";

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  setTheme: (newTheme: any) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme !== "light" && storageTheme !== "dark") {
      return;
    }

    setTheme(storageTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
