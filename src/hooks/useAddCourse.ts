import { useMutation } from "@tanstack/react-query";
import { addCourse } from "../services/apiCourses";

export function useAddCourse() {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: addCourse,
    mutationKey: ["addCourse"],
  });

  return { mutate, isLoading: isPending, isSuccess, isError };
}
