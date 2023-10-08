import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Services from "../pages/Services";

const CustomRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <div>4440</div>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },{
          path: "/services",
          element: <Services></Services>,
        }],
    },
  ]);

export default CustomRoute;