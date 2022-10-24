// Imports libraries
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto">
        <nav className="flex justify-between">
          <NavLink to="/">Logo</NavLink>
          <NavLink to="/post">Posts</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/about">About Author</NavLink>
        </nav>
      </div>
    </header>
  );
};
