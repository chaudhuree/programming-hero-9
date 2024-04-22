import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { routeLists } from "../utils";
import logo from "/logo.svg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export default function Navbar() {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    logout();
  };
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="navbar bg-[#FAFAFA] container mx-auto px-[40px] rounded-[70px] mt-9 font-poppins">
      <Tooltip id="avatar" />
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="pl-0 btn btn-ghost lg:hidden"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routeLists?.map((route) => (
              <li key={route.path}>
                <NavLink to={route.path} className="btn btn-ghost">
                  {route.routeName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className=" text-xl ml-0 flex items-center gap-3">
          <img src={logo} alt="brand-logo" />
          <span className="text-[#1E1E1E] mt-[9px] font-extrabold">HOME</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex bg-[#FEFEFF] rounded-[40px] py-5 px-6">
        <div className="flex flex-row gap-8 px-1">
          {routeLists?.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={`${
                pathMatchRoute(route.path)
                  ? "text-black border-b-[3px] border-b-red-500"
                  : ""
              } ${
                !currentUser && route.path === "/profile" && "hidden"
              } leading-[120%] text-[#1E1E1E]`}
            >
              {route.routeName}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <div className="flex items-center gap-2">
            <div className="avatar dropdown dropdown-end">
              <div
                className="w-10 rounded-full ring-2 ring-[#FEFEFF] "
                tabIndex={0}
                data-tooltip-id="avatar"
                data-tooltip-content={currentUser?.displayName}
                data-tooltip-place="left-start"
                data-tooltip-class-name="custom-tooltip"
              >
                <img src={currentUser?.photoURL} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[99999] menu py-2 px-8 shadow bg-base-100 rounded-box  mt-4 flex flex-col gap-2 font-poppins"
              >
                <li className="hover:font-bold">
                  {currentUser?.displayName}
                </li>
                <li >
                  {currentUser?.email}
                </li>
              </ul>
            </div>
            <button
              onClick={logoutHandler}
              className="py-[15px] px-[35px] bg-[#FEFEFF] text-[#1E1E1E] rounded-[40px] font-semibold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <NavLink
              to="/signin"
              className={`${
                pathMatchRoute("/signin")
                  ? "text-[#62caec] border-[1px] border-red-500"
                  : ""
              } py-[15px] px-[35px] bg-[#FEFEFF] text-[#1E1E1E] rounded-[40px] font-semibold`}
            >
              Login ➝
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
