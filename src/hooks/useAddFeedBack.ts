import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AddFeedBack } from "../services/apiFeedback";

export function useAddFeedBack() {
  const { mutate, isPending } = useMutation({
    mutationFn: AddFeedBack,
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Feedback submitted successfully");
    },
  });

  return { mutate, isLoading: isPending };
}
