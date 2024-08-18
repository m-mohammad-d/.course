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
import TeacherRequestsPage from "./pages/TeacherRequestsPage";
import ManageCoursesPage from "./pages/ManageCoursesPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import AdminLayout from "./layout/AdminLayout";
import SendFeedbackPage from "./pages/SendFeedbackPage";
import FeedbackManagement from "./pages/FeedbackManagement";

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
          {
            path: "/user/feedback",
            element: <SendFeedbackPage />,
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
            element: <EditPasswordPage />,
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
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/admin/manage-users",
            element: <ManageUsersPage />,
          },
          {
            path: "/admin/manage-courses",
            element: <ManageCoursesPage />,
          },
          {
            path: "/admin/reports",
            element: <FeedbackManagement />,
          },
          {
            path: "/admin/teacher-requests",
            element: <TeacherRequestsPage />,
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
