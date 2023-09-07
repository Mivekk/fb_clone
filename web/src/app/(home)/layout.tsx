import React from "react";
import NavBar from "./components/NavBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default HomeLayout;
