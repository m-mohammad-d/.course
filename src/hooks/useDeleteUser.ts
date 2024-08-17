import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../services/apiUser";
import toast from "react-hot-toast";

function useDeleteUser(id: string) {
  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteUser(id),
    onSuccess: () => {
      toast.success("user delete");
    },
    onError: () => {
      toast.error("failed");
    },
  });

  return {
    mutate,
    isPending,
  };
}

export default useDeleteUser;
