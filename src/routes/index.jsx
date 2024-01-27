import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";

// import UserProfile from "../UserProfile";
// import ProductDetails from "../ProductDetails";
// import AddProduct from "../dashboard/AddProduct";
// import PrivateRoute from "../../context/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <AllFood />,
  //       },
  //       {
  //         path: "/dashboard/add",
  //         element: <FromPage />,
  //       },
  //     ],
  //   },
]);
export default routes;