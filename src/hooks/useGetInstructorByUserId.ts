import { useQuery } from "@tanstack/react-query";
import { getInstructorByUserid } from "../services/apiInstructors";

function useGetInstructorByUserid(userId: string) {
  const { data, error, isLoading } = useQuery({
    queryFn: () => getInstructorByUserid(userId),
    queryKey: ["getInstructor", userId],
  });

  return { data, error, isLoading };
}

export default useGetInstructorByUserid;
