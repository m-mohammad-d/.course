import { Navigate, Outlet } from "react-router-dom";

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
  const role = getUserRole();

  if (!role) return <Navigate to="/login" />;

  if (role === "teacher") return <Navigate to="/teacher/dashboard" />;
  if (role === "user") return <Navigate to="/user/mycourse" />;

  return <Outlet />;
};

export default PrivateRoute;
