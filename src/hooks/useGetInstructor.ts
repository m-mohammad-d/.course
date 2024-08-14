import { useQuery } from "@tanstack/react-query";
import { getInstructorById } from "../services/apiInstructors";

function useGetInstructor(instructorId: string | undefined) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getInstructor", instructorId],
    queryFn: () => getInstructorById(instructorId),
    enabled: !!instructorId,
  });

  return { data, error, isLoading };
}

export default useGetInstructor;
