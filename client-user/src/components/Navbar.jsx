import navbarLogo from "../images/navbar_logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isLogin = false;
  return (
    <nav className="flex justify-between px-64 py-4 items-center bg-white fixed top-0 z-30 y w-screen  left-0 border-b border-gray-200">
      <div>
        <Link to="/" className="flex items-center">
          <img src={navbarLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center">
        {!isLogin && (
          <ul className="flex items-center space-x-4">
            <li className="py-3">
              <Link
                to="jobs"
                className="text-gray-800 hover:text-gray-700 bg-white focus:outline-none font-medium rounded-md text-md px-2 py-3 text-center"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="register"
                className="text-[#0086FF] hover:text-gray-700 bg-white hover:bg-gray-100 focus:ring-4 border border-[#0086FF] focus:outline-none font-medium rounded-md text-sm px-6 py-3 text-center"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="login"
                className="text-white hover:text-white bg-[#0086FF]  hover:bg-[#147dda] focus:ring-4 border focus:outline-none font-medium rounded-md text-sm px-6 py-3 text-center"
              >
                Sign In
              </Link>
            </li>
          </ul>
        )}
        {isLogin && (
          <ul className="flex items-center space-x-4">
            <li className="py-3">
              <Link
                to="jobs"
                className="text-gray-800 hover:text-gray-700 bg-white focus:outline-none font-medium rounded-md text-md px-2 py-3 text-center"
              >
                Jobs
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="home"
                className="text-gray-800 hover:text-gray-700 bg-white focus:outline-none font-medium rounded-md text-md pl-2 py-3 text-center"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
