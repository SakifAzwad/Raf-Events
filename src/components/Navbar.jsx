import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthCon } from "./Provider/AuthProv";

const Navbar = () => {
  const { user, logOut } = useContext(AuthCon);

  const hanlogout = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      
      {
        user && <>
         
      <li>
        <NavLink to="/myevents">My Events</NavLink>
      </li>
      <li>
        <NavLink to="/payment">Payment</NavLink>
      </li>
        
        </>
      }
      <li>
        <NavLink to="/aboutus">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="absolute z-10 top-0 left-0 right-0">
      <div className="pt-8 md:px-12 flex justify-between bg-transparent text-[#efe0ca] font-bold">
        <div className="">
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
              className="text-[#efe0ca] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#001233] rounded-box w-52"
            >
              {links}
              {user ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </>
          ) : (
            <></>
          )}
          {user ? (
            <>
              <h1 className="flex  lg:items-center">{user.displayName}</h1>
            </>
          ) : (
            <></>
          )}
            </ul>
          </div>
          <a className="btn text-[#fe5000] text-xl lg:text-4xl btn-ghost normal-case  font-extrabold">
            Raf Events
          </a>
        </div>
        <div className="flex lg:gap-x-4">
          <div className="hidden lg:flex">
            <ul className="text-2xl mr-4 lg:gap-x-8 items-center text-[#efe0ca] menu-horizontal px-1">
              {links}
              
            </ul>
          </div>
          {user ? (
            <>
              <label tabIndex={0} className=" hidden md:block btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </>
          ) : (
            <></>
          )}
          {user ? (
            <>
              <h1 className=" hidden md:block justify-center lg:items-center">{user.displayName}</h1>
            </>
          ) : (
            <></>
          )}
          <div className="">
            {user ? (
              <>
                <button
                  onClick={hanlogout}
                  className="btn bg-[#efe0ca]  hover:bg-[#fe5000] hover:text-[#efe0ca] mr-4"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn bg-[#efe0ca] text-xs md:text-sm  hover:bg-[#fe5000] hover:text-[#efe0ca] mr-4">
                    Sign IN
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-[#efe0ca] text-xs md:text-sm  hover:bg-[#fe5000] hover:text-[#efe0ca]">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
