import { Link, NavLink } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiSignOutBold } from "react-icons/pi";
import logo_url from './../../../public/logo-2.png';

const navItems = (
  <>
    <li className="">
      <NavLink
        className="font-bold hover:text-white hover:font-extrabold hover:bg-[#17B098]"
        to={"/"}
      >
        Home
      </NavLink>
    </li>
    <li className="">
      <NavLink
        className="font-bold hover:text-white hover:font-extrabold hover:bg-[#17B098]"
        to={"/services"}
      >
        Services
      </NavLink>
    </li>
    <li className="">
      <NavLink
        className="font-bold hover:text-white hover:font-extrabold hover:bg-[#17B098]"
        to={"/team"}
      >
        Meet Our Team
      </NavLink>
    </li>
    <li className="">
      <NavLink
        className="font-bold hover:text-white hover:font-extrabold hover:bg-[#17B098]"
        to={"/contact"}
      >
        Contact Us
      </NavLink>
    </li>
  </>
);
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const { displayName, email, photoURL } = user;
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="fixed z-20 max-w-screen-xl w-full bg-black rounded-full">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {navItems}
              </ul>
            </div>
            <img
              className="h-8 md:h-16"
              src={logo_url}
              alt="logo"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <div className="flex items-center bg-slate-500 rounded-full pr-4 gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL ? (user?.photoURL):('./../../../public/profile-avatar.jpg')} alt="profile" />
                      </div>
                    </div>
                    <RxDropdownMenu />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black"
                >
                  <li>
                    <div className="flex flex-col items-start hover:cursor-default bg-slate-300 hover:bg-slate-300 glass mb-3">
                      <h2 className="font-bold">{user?.displayName}</h2>
                      <h2>{user?.email}</h2>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center hover:cursor-default bg-slate-400 hover:bg-slate-500 glass text-2xl"
                    >
                      <h2>
                        <PiSignOutBold />
                      </h2>
                      <h2>Sign Out</h2>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link to={"/signup"}>
                  <button className="bg-slate-700 mr-2 glass px-2 md:px-6 py-2 rounded-full font-bold capitalize text-sm md:text-xl hover:bg-slate-900">
                    Sign Up
                  </button>
                </Link>
                <Link to={"/signin"}>
                  <button className="bg-slate-700 glass px-2 md:px-6 py-2 rounded-full font-bold capitalize text-sm md:text-xl hover:bg-slate-900">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <div className="flex items-center bg-slate-500 rounded-full pr-4 gap-2">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/profile-avatar.jpg" alt="/profile-avatar.jpg" />
                    </div>
                  </div>
                  <RxDropdownMenu />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
