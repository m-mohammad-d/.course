import { useQuery } from "@tanstack/react-query";
import { getCoursesByInstructor } from "../services/apiCourses";

function useGetCoursesByInstructor(instructorId: string | undefined) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getCoursesByInstructor", instructorId],
    queryFn: () => getCoursesByInstructor(instructorId),
  });

  return { data, error, isLoading };
}

export default useGetCoursesByInstructor;
