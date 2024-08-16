
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserRole } from "../utils/getUserRole";

const PrivateRoute = () => {
  const userRole = getUserRole();
  const location = useLocation();

  const isUserRoute = location.pathname.startsWith("/user");
  const isTeacherRoute = location.pathname.startsWith("/teacher");
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isUserRoute && userRole === "user") {
    return <Outlet />;
  } else if (isTeacherRoute && userRole === "teacher") {
    return <Outlet />;
  } else if (isAdminRoute && userRole === "admin") {
    return <Outlet />;
  } else if (!isUserRoute && !isTeacherRoute && !isAdminRoute && userRole) {
    if (userRole === "user") {
      return <Navigate to="/user/mycourse" />;
    } else if (userRole === "teacher") {
      return <Navigate to="/teacher/dashboard" />;
    } else if (userRole === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
