import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ContactLayout = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vitae
        hic quaerat ea, adipisci asperiores, similique quas, consectetur
        excepturi nam deserunt cumque minus? Tempore, quia? Hic eaque eum illum!
        Veniam.
      </p>
      <nav>
        <NavLink to={"faq"}>FAQ</NavLink>
        <NavLink to={"form"}>Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
