import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  confirmTeacherRequest,
  rejectTeacherRequest,
} from "../services/apiInstructors";
import { updateUserRole } from "../services/apiUser";

function useTeacherRequestActions() {
  const { mutate: confirmRequest } = useMutation({
    mutationFn: async ({
      requestId,
      userId,
    }: {
      requestId: string;
      userId: string;
    }) => {
      await confirmTeacherRequest(requestId);
      await updateUserRole(userId);
    },
    onSuccess: () => {
      toast.success("Request confirmed successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const { mutate: rejectRequest } = useMutation({
    mutationFn: rejectTeacherRequest,

    onSuccess: () => {
      toast.success("Request rejected successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { confirmRequest, rejectRequest };
}

export default useTeacherRequestActions;
