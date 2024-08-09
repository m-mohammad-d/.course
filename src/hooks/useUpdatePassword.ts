import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const mutation = useMutation({
    mutationFn: (password: string) => updatePassword(password),
    onError: (error: unknown) => {
      console.error("Password update failed:", error);
    },
    onSuccess: () => {
      toast.success("Password updated successfully");
    },
  });

  return {
    handleUpdatePassword: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error ? (mutation.error as Error).message : null,
  };
}
