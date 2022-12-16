import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-y-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 max-h-full overflow-hidden overflow-y-scroll">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
