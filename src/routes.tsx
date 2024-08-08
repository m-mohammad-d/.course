import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./layout/AppLayout";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CoursePage from "./pages/CoursePage";
import NottFoundPage from "./pages/NottFoundPage";
// import UserProfile from "./pages/UserProfile";
// import EditProfile from "./pages/EditProfile";
// import EditPassword from "./pages/EditPassword";
import MyCourse from "./pages/MyCourse";
import PrivateRoute from "./components/PrivateRoute";
import UserLayout from "./layout/userLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/course/:id",
        element: <CoursePage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <UserLayout />,
            children: [
              // {
              //   path: "/user/profile",
              //   element: <UserProfile />,
              // },
              // {
              //   path: "/user/editprofile",
              //   element: <EditProfile />,
              // },
              // {
              //   path: "/user/editpassword",
              //   element: <EditPassword />,
              // },
              {
                path: "/user/mycourse",
                element: <MyCourse />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NottFoundPage />,
  },
]);

export default router;
