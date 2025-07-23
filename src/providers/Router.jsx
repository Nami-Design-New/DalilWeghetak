import { createBrowserRouter, Outlet } from "react-router";
import RootLayout from "../layout/RootLayout";
import About from "../routes/About";
import ActivityDetails from "../routes/ActivityDetails";
import AddEvent from "../routes/AddEvent";
import Contact from "../routes/Contact";
import DestinationDetails from "../routes/DestinationDetails";
import Error from "../routes/Error";
import EventDetails from "../routes/EventDetails";
import AllEvents from "../routes/Events";
import ExperienceDetails from "../routes/ExperienceDetails ";
import FaqPage from "../routes/Faqs";
import Favorites from "../routes/Favorites";
import Home from "../routes/Home";
import InteractiveMap from "../routes/InteractiveMap";
import Login from "../routes/Login";
import MyBooking from "../routes/MyBooking";
import MyEvents from "../routes/MyEvents";
import MyWallet from "../routes/MyWallet";
import Notifications from "../routes/Notifications";
import Privacy from "../routes/Privacy";
import ProviderRegister from "../routes/ProviderRegister";
import ResetPassword from "../routes/ResetPassword";
import SessionDetails from "../routes/SessionDetails";
import Settings from "../routes/Settings";
import Terms from "../routes/Terms";
import UserRegister from "../routes/UserResgister";
import GardProvider from "./GardProvider";

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
        path: "about",
        element: <About />,
      },
      {
        path: "activity/:id",
        element: <ActivityDetails />,
      },
      {
        path: "experiences/:id",
        element: <ExperienceDetails />,
      },
      {
        path: "event/:id",
        element: <EventDetails />,
      },
      {
        path: "session/:id",
        element: <SessionDetails />,
      },
      {
        path: "destination/:id",
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
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "map",
        element: <InteractiveMap />,
      },

      {
        path: "",
        element: (
          <GardProvider>
            <Outlet />
          </GardProvider>
        ),
        children: [
          {
            path: "my-bookings",
            element: <MyBooking />,
          },
          {
            path: "wallet",
            element: <MyWallet />,
          },
          {
            path: "favorites",
            element: <Favorites />,
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
            path: "add-event",
            element: <AddEvent />,
          },
        ],
      },
    ],
  },
]);
