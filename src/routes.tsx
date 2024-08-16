import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./layout/AppLayout";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CoursePage from "./pages/CoursePage";
import NotFoundPage from "./pages/NotFoundPage";
import MyCourse from "./pages/MyCourse";
import PrivateRoute from "./components/PrivateRoute";
import UserLayout from "./layout/userLayout";
import TeacherLayout from "./layout/TeacherLayout";
import EditProfilePage from "./pages/EditProfilePage";
import EditPasswordPage from "./pages/EditPasswordPage";
import CourseListPage from "./pages/CourseListPage";
import InstructorPage from "./pages/InstructorPage";
import TeacherCourses from "./pages/TeacherCourses";
import AddCourse from "./pages/AddCourse";

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
        path: "/courses",
        element: <CourseListPage />,
      },
      {
        path: "/instructor/:id",
        element: <InstructorPage />,
      },
    ],
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
          {
            path: "/user/edit-password",
            element: <EditPasswordPage />,
          },
        ],
      },
      {
        element: <TeacherLayout />,
        children: [
          {
            path: "/teacher/edit-profile",
            element: <EditProfilePage />,
          },
          {
            path: "/teacher/edit-password",
            element: <EditProfilePage />,
          },
          {
            path: "/teacher/myCourse",
            element: <TeacherCourses />,
          },
          {
            path: "/teacher/addNewCourse",
            element: <AddCourse />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
