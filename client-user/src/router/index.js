import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import DetailJob from "../pages/DetailJob";
import Index from "../pages/Index";
import ListJob from "../pages/ListJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "jobs",
        element: <Jobs />,
        children: [
          {
            path: "",
            element: <ListJob />,
          },
          {
            path: ":id",
            element: <DetailJob />,
          },
        ],
      },
    ],
  },
]);

export default router;
