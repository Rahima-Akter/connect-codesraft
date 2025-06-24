import React from "react";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-sm shadow-sm lg:px-16 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn btn-ghost bg-none hover:bg-none text-xl navbar-center lg:navbar-start lg:-mr-14 lg:-ml-[32rem] w-10">
        CONNECT.
      </button>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
