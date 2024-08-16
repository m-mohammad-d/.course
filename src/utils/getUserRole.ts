type UserRole = "user" | "teacher" | "admin" | null;
export const getUserRole = (): UserRole => {
  const token = localStorage.getItem("sb-llgyyyodgevtfoidrwjf-auth-token");
  if (!token) return null;

  const payloadBase64 = token.split(".")[1];
  const decodedPayload = JSON.parse(atob(payloadBase64));

  const role = decodedPayload?.user_metadata?.roles || null;

  return role as UserRole;
};
