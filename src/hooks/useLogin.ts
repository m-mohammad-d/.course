import { useMutation } from "@tanstack/react-query";
import { login as userLogin } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      userLogin({ email, password }),
    onSuccess: () => {
      navigate("/user");
    },
    onError: (err) => {
      console.error(err);
      toast.error("provided email and password are incorrect");
    },
  });

  return { login, isPending };
}

export default useLogin;
