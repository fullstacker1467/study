import React from "react";
import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="pageNotFound-container">
      <h1>PageNotFound</h1>
      <NavLink to={"/"}>Home Page</NavLink>
    </div>
  );
};
