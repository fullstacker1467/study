import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-[70px]">
      <div className="container h-full flex items-center justify-center gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </nav>
  );
};
