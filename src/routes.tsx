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
import UserLayout from "./layout/UserLayout";
import TeacherLayout from "./layout/TeacherLayout";
import EditProfilePage from "./pages/EditProfilePage";
import EditPasswordPage from "./pages/EditPasswordPage";
import CourseListPage from "./pages/CourseListPage";
import InstructorPage from "./pages/InstructorPage";

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
    element: <PrivateRoute />
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
          // روت‌های مربوط به معلم
          {
            path: "/teacher/dashboard",
            element: <div>Teacher Dashboard</div>,
          },
          {
            path: "/teacher/courses",
            element: <div>My Courses</div>,
          },
          {
            path: "/teacher/add-course",
            element: <div>Add New Course</div>,
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
