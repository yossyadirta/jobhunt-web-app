import sidebarLogo from "../images/sidebar_logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  let activeClassName =
    "flex items-center p-2 space-x-6 rounded-md bg-[#006DFF] text-white";

  let inActiveClassName =
    "flex items-center p-2 text-gray-500 space-x-6 rounded-md hover:bg-[#006DFF] hover:text-white";

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside
      className="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
      id="sidebar-menu"
    >
      <div className="flex items-center justify-between flex-shrink-0 p-2 mr-16">
        <span className="p-2 text-2xl font-bold leading-8 tracking-wider whitespace-nowrap">
          <div className="flex">
            <img src={sidebarLogo} alt="logo" />
          </div>
        </span>
      </div>

      <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
        <ul className="p-2 overflow-hidden">
          <li>
            <NavLink
              to="jobs"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              <span className="text-white-500">Jobs</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="companies"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              <span className="text-white-500">Companies</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="admin-registration"
              className={({ isActive }) =>
                isActive ? activeClassName : inActiveClassName
              }
            >
              <span className="text-white-500">Admin Registration</span>
            </NavLink>
          </li>

          <hr className="pt-2" />
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-2 text-gray-500 space-x-6 rounded-md hover:text-[#2153e9]"
            >
              <span className="text-white-500">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
