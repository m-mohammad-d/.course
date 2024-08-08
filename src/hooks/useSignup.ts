import { useMutation } from "@tanstack/react-query";
import { signup as userSignup } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: async ({
      email,
      password,
      full_name,
    }: {
      email: string;
      password: string;
      full_name: string;
    }) => {

      if (!email || !password || !full_name) {
        throw new Error("Please fill out all fields.");
      }


      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }


      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
      }


      if (full_name.length < 3) {
        throw new Error("Full name must be at least 3 characters long.");
      }


      return userSignup({ email, password, full_name });
    },
    onSuccess: () => {
      navigate("/user");
      toast.success("Signup successful!");
    },
    onError: (err: Error) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return { signup, isPending };
}

export default useSignup;
