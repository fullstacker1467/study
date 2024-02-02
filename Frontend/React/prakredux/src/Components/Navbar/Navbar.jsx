import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="h-[70px] bg-slate-800">
        <div className="h-full container flex justify-center gap-10 items-center text-white">
          <Link to={'/'}><i className="fa-solid fa-users text-3xl"></i></Link>
          <Link to={'/form'}><i className="fa-solid fa-user-plus text-3xl"></i></Link>
        </div>
      </nav>
    </>
  );
};
