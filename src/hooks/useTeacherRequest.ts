import { useQuery } from "@tanstack/react-query";
import { getTeacherRequests } from "../services/apiInstructors";


export function useTeacherRequests() {
  const { data: requests, isLoading } = useQuery({
    queryFn: getTeacherRequests,
    queryKey : ["getTeacherRequests"]
  });

  return { requests, isLoading };
}
