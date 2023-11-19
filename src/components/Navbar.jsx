import { useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlink =
    "py-2 px-4 rounded-md bg-white text-gray-900 font-semibold hover:bg-sky-500/20 hover:text-sky-500";
  const activeNavlink =
    "py-2 px-4 rounded-md bg-sky-500/20 text-sky-500 font-semibold hover:bg-sky-500/20 hover:text-sky-500";
  const mobileNavlink =
    "py-3 px-2 rounded bg-white text-lg font-semibold text-sky-600 hover:bg-sky-500/20 hover:text-sky-600";
  const activeMobileNavlink =
    "py-3 px-2 rounded bg-sky-500/20 text-lg font-semibold text-sky-600 hover:bg-sky-500/20 hover:text-sky-600";
  return (
    <nav className="w-full border-b border-gray-300 fixed bg-gradient-to-br bg-white z-50 px-4 lg:px-0">
      <div className="flex justify-between max-w-7xl mx-auto py-4">
        <div className="my-auto">
          <a href="/" className="text-xl font-bold text-sky-500">
            AGENCY
          </a>
        </div>
        {/* dekstop menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeNavlink : navlink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeNavlink : navlink)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? activeNavlink : navlink)}
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeNavlink : navlink)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 px-4 rounded-md bg-sky-500 text-white font-semibold hover:bg-sky-400 "
          >
            Contact Us
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button
            className="p-2 rounded hover:bg-sky-500 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <TbX /> : <TbMenu />}
          </button>
        </div>
      </div>
      {/* mobile  */}

      {isMenuOpen && (
        <div className="w-full h-screen lg:hidden transition-all duration-700 delay-500 ease-in-out">
          <div className="flex flex-col justify-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeMobileNavlink : mobileNavlink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeMobileNavlink : mobileNavlink
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? activeMobileNavlink : mobileNavlink
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeMobileNavlink : mobileNavlink
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="py-3 px-2 rounded bg-sky-500 text-lg font-semibold text-white hover:bg-sky-500 hover:text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
