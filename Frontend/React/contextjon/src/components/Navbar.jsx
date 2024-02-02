import { HouseLine, UserCirclePlus } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-sky-800 h-[60px]">
      <div className="container h-full flex justify-center items-center gap-20 text-white">
        <Link className="text-2xl flex items-center gap-2" to={"/"}>
          <HouseLine /> Home
        </Link>
        <Link className="text-2xl flex items-center gap-2" to={"/form"}>
          <UserCirclePlus /> Form
        </Link>
      </div>
    </nav>
  );
};
