// Imports libraries
import { NavLink } from "react-router-dom";

// Imports styling utils
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";

export const NavBar = () => {
  return (
    <header className="bg-gray-800">
      <div className="container px-2 sm:px-6 lg:px-8 mx-auto">
        <nav className="flex items-center justify-between">
          <ul className="inline-flex text-gray-400 gap-5 items-center">
            <li>
              <NavLink
                className="text-white py-5 mr-2 md:mr-4 2xl:mr-8 cursive logo"
                to="/"
              >
                Logotype
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (isActive && "text-white") || "";
                }}
                to="/posts"
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (isActive && "text-white") || "";
                }}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return (isActive && "text-white") || "";
                }}
                to="/about"
              >
                About Author
              </NavLink>
            </li>
          </ul>
          <div className="inline-flex gap-3">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white text-blue-800 text-3xl"
            >
              <ImFacebook2 />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white text-sky-600 text-3xl"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-sm text-rose-500 text-3xl"
            >
              <TfiYoutube className="p-1" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
