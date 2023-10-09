import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ErrorPage from "../pages/ErrorPage";
import ServicesDetails from "../pages/ServicesDetails";
import ContactDetails from "../pages/ContactDetails";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const CustomRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/eventDetails/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: () => fetch(`/events.json`),
      },
      {
        path: "/contact",
        element: <ContactDetails></ContactDetails>,
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
]);

export default CustomRoute;
