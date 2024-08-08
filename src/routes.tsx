import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./layout/AppLayout";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CoursePage from "./pages/CoursePage";
import NottFoundPage from "./pages/NottFoundPage";
import MyCourse from "./pages/MyCourse";
import PrivateRoute from "./components/PrivateRoute";
import UserLayout from "./layout/userLayout";
import EditProfilePage from "./pages/EditProfilePage";

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
              {
                path: "/user/mycourse",
                element: <MyCourse />,
              },
              {
                path: "/user/edit-profile",
                element: <EditProfilePage />,
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
