import { NavLink, Outlet } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs";

export const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <BreadCrumbs />
      <Outlet />
      <footer></footer>
    </>
  );
};
