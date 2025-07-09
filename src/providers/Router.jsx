import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../routes/Home";
import Error from "../routes/Error";
import Contact from "../routes/Contact";
import Login from "../routes/Login";
import Register from "../routes/ProviderRegister";
import About from "../routes/About";
import ActivityDetails from "../routes/ActivityDetails";
import Terms from "../routes/Terms";
import Privacy from "../routes/Privacy";
import AllEvents from "../routes/Events";
import ResetPassword from "../routes/ResetPassword";
import ProviderRegister from "../routes/ProviderRegister";
import UserRegister from "../routes/UserResgister";
import DestinationDetails from "../routes/DestinationDetails";
import AddEventForm from "../routes/AddEventForm";
import Notifications from "../routes/Notifications";
import Settings from "../routes/Settings";
import MyEvents from "../routes/MyEvents";
import MyWallet from "../routes/MyWallet";
import EventDetails from "../routes/EventDetails";
import MyBooking from "../routes/MyBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "provider-signup",
        element: <ProviderRegister />,
      },
      {
        path: "user-signup",
        element: <UserRegister />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "add-event",
        element: <AddEventForm />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "activity/:id",
        element: <ActivityDetails />,
      },
      {
        path: "event/:id",
        element: <EventDetails />,
      },

      {
        path: "destination/:name",
        element: <DestinationDetails />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "events",
        element: <AllEvents />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "my-events",
        element: <MyEvents />,
      },
      {
        path: "wallet",
        element: <MyWallet />,
      },
       {
        path: "my-bookings",
        element: <MyBooking />,
      },
    ],
  },
]);
