import { useMutation } from "@tanstack/react-query";
import { login as userLogin } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getUserRole } from "../utils/getUserRole";

function useLogin() {
  const navigate = useNavigate();
  const userRole = getUserRole();
  const navigateLink =
    userRole === "teacher"
      ? "/teacher/edit-profile"
      : userRole === "admin"
      ? "/admin/manage-users"
      : "/user/edit-profile";

  const { mutate: login, isPending } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      if (!email || !password) {
        throw new Error("Please fill out all fields.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      return userLogin({ email, password });
    },
    onSuccess: () => {
      navigate(navigateLink);
      toast.success("Login successful!");
    },
    onError: (err: Error) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return { login, isPending };
}

export default useLogin;
