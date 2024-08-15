import { Navigate, Outlet, useLocation } from "react-router-dom";

type UserRole = "user" | "teacher" | "admin" | null;

const getUserRole = (): UserRole => {
  const token = localStorage.getItem("sb-llgyyyodgevtfoidrwjf-auth-token");
  if (!token) return null;

  const payloadBase64 = token.split(".")[1];
  const decodedPayload = JSON.parse(atob(payloadBase64));

  const role = decodedPayload?.user_metadata?.roles || null;

  return role as UserRole;
};

const PrivateRoute = () => {
  const userRole = getUserRole();
  const location = useLocation();

  const isUserRoute = location.pathname.startsWith("/user");
  const isTeacherRoute = location.pathname.startsWith("/teacher");

  if (isUserRoute && userRole === "user") {
    return <Outlet />;
  } else if (isTeacherRoute && userRole === "teacher") {
    return <Outlet />;
  } else if (!isUserRoute && !isTeacherRoute && userRole) {

    if (userRole === "user") {
      return <Navigate to="/user/mycourse" />;
    } else if (userRole === "teacher") {
      return <Navigate to="/teacher/dashboard" />;
    }
  }


  return <Navigate to="/login" />;
};

export default PrivateRoute;
