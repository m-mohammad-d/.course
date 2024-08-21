import { useMutation } from "@tanstack/react-query";
import { addComment } from "../services/apiCourses";

export function useAddComment() {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: addComment,
    mutationKey: ["addcomment"],
  });

  return { mutate, isLoading: isPending, isSuccess, isError };
}
