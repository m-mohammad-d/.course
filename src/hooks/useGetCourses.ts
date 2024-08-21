import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../services/apiCourses";

function useGetCourses(query: string) {
  const { data, error, isLoading } = useQuery({
    queryFn: () => getCourse(query),
    queryKey: ["getCourses", query],
  });

  return {
    data: data || [],
    error: error?.message || null,
    isLoading,
  };
}

export default useGetCourses;
