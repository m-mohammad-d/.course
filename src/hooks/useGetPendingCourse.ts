import { useQuery } from "@tanstack/react-query";
import { getCoursePending } from "../services/apiCourses";

function useGetPendingCourse() {
  const { data, error, isPending } = useQuery({
    queryFn: getCoursePending,
    queryKey: ["getCoursePending"],
  });

  return {
    data,
    error: error?.message || null,
    isLoading: isPending,
  };
}

export default useGetPendingCourse;
