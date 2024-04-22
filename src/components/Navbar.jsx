import { navLinks } from "../utils/navlink";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 font-work-sans container mx-auto my-12 px-0 max-md:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className=" text-gray-100  hover:font-extrabold duration-200 transition-all hover:bg-limegreen-300  hover:text-limegreen-200 p-3 text-center rounded-lg"
                to={link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <a className="font-bold md:text-9xl text-xl text-gray-100">Nil Khet</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  space-x-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              className="text-gray-300 text-lg font-normal py-[14px] px-[20px] border-[1px] hover:border-[1px] border-solid rounded-lg border-transparent hover:border-limegreen-200 bg-transparent hover:bg-limegreen-300 flex self-stretch hover:text-limegreen-200 duration-200 transition-all"
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <Link to="/signin"><Button text="Sign In"/></Link>
        <Link to="/signup"><Button text="Sign Up" customClass="bg-mediumturquoise max-md:hidden" /></Link>
      </div>
    </div>
  );
}
