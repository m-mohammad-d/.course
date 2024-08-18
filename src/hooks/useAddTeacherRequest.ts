import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addInstructorRequest  } from "../services/apiInstructors";

function useAddTeacherRequest() {
  const { mutate, isPending } = useMutation({
    mutationFn: addInstructorRequest,
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Request submitted successfully");
    },
  });

  return { mutate, isPending };
}

export default useAddTeacherRequest;
