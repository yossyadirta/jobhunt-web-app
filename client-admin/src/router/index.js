import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Companies from "../pages/Companies";
import AdminRegistration from "../pages/AdminRegistration";
import Jobs from "../pages/Jobs";
import NewJob from "../pages/NewJob";
import NewCompany from "../pages/NewCompany";
import ListCompanies from "../pages/ListCompanies";
import ListJobs from "../pages/ListJobs";
import EditCompany from "../pages/EditCompany";
import EditJob from "../pages/EditJob";

const router = createBrowserRouter([
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/jobs");
      }
    },
    element: <Login />,
  },
  {
    path: "/",
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }
    },
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <ListJobs />,
      },
      {
        path: "jobs",
        element: <Jobs />,
        children: [
          {
            path: "",
            element: <ListJobs />,
          },
          {
            path: "add",
            element: <NewJob />,
          },
          {
            path: "edit/:id",
            element: <EditJob />,
          },
        ],
      },
      {
        path: "companies",
        element: <Companies />,
        children: [
          {
            path: "",
            element: <ListCompanies />,
          },
          {
            path: "add",
            element: <NewCompany />,
          },
          {
            path: "edit/:id",
            element: <EditCompany />,
          },
        ],
      },
      {
        path: "admin-registration",
        element: <AdminRegistration />,
      },
    ],
  },
]);

export default router;
