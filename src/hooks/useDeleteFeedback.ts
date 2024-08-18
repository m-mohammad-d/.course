import { useMutation } from "@tanstack/react-query";
import { deleteFeedback } from "../services/apiFeedback";
import toast from "react-hot-toast";

function useDeleteFeedback() {
  const { mutate, isPending } = useMutation({
    mutationFn: deleteFeedback,
    onSuccess: () => {
      toast.success("feedback delete");
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
export default useDeleteFeedback