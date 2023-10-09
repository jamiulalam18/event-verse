import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ErrorPage from "../pages/ErrorPage";
import ServicesDetails from "../pages/ServicesDetails";
import ContactDetails from "../pages/ContactDetails";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import TeamMembers from "../pages/TeamMembers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/eventDetails/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails />
          </PrivateRoute>
        ),
        loader: () => fetch(`/events.json`),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <ContactDetails></ContactDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/team",
        element: (
          <PrivateRoute>
            <TeamMembers></TeamMembers>
          </PrivateRoute>
        ),
        loader: () => fetch(`/team.json`),
      },
    ],
  },
]);

export default CustomRoute;
