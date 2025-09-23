import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../reducer/userReducer";

const Header = () => {
  const [nav, setNav] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("loggedBlogappuser");
    dispatch(setUser(null));
  };

  return (
    <header >
      <nav className="bg-indigo-500 h-16 shadow-sm">
        <div className="flex justify-between items-center h-full mx-auto max-w-screen-lg px-4">
          <a href="#" className="flex items-center">
            <img
              src="/svg_logo.svg"
              alt="MyBlogApp"
              className="h-28 w-auto object-contain"
            />
          </a>

          <div
            className={`${
              nav
                ? "absolute top-16 left-0 w-full bg-gray-100 shadow-md p-4 flex flex-col gap-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none md:flex-row md:gap-8"
                : "hidden md:flex gap-8"
            } transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 md:text-cyan-300 font-semibold"
                      : "text-black md:text-white font-semibold hover:text-blue-700 md:hover:text-cyan-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 md:text-cyan-300 font-semibold"
                      : "text-black md:text-white font-semibold hover:text-blue-600 md:hover:text-cyan-300"
                  }
                >
                  Users
                </NavLink>
              </li>
              <li>
                {user ? (
                  <button
                    onClick={logout}
                    className="md:text-white text-black  font-semibold hover:text-blue-700 md:hover:text-cyan-300"
                  >
                    Log Out
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                      ? "text-blue-700 md:text-cyan-300 font-semibold"
                      : "text-black md:text-white font-semibold hover:text-blue-700 md:hover:text-cyan-300"

                    }
                  >
                    Sign In
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
