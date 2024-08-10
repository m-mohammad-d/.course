import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/apiAuth";

function useGetUserProfile() {
  const { data, error, isPending } = useQuery({
    queryFn: getUserProfile,
    queryKey: ["getUserProfile"],
  });

  return {
    data,
    error: error?.message || null,
    isLoading: isPending,
  };
}

export default useGetUserProfile;
