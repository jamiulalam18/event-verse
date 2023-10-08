import { NavLink } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";

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
        to={"/upcoming"}
      >
        Upcoming Events
      </NavLink>
    </li>
    <li className="">
      <NavLink
        className="font-bold hover:text-white hover:font-extrabold hover:bg-[#17B098]"
        to={"/team"}
      >
        Meet The Team
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
            <img className="h-16" src="./logo-2.png" alt="logo" />
            {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
