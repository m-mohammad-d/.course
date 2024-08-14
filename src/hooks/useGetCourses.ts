import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../services/apiCourses";

function useGetCourses() {
  const { data, error, isPending } = useQuery({
    queryFn: getCourse,
    queryKey: ["getCourse"],
  });

  return {
    data: data || [],
    error: error?.message || null,
    isLoading: isPending,
  };
}

export default useGetCourses;