import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
