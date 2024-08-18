import { useQuery } from "@tanstack/react-query";
import { getAllFeedback } from "../services/apiFeedback";

function useGetFeadBack() {
  const { data, error, isLoading } = useQuery({
    queryFn: getAllFeedback,
    queryKey: ["getAllUser"],
  });

  return {
    data,
    error: error?.message || null,
    isLoading,
  };
}

export default useGetFeadBack;
