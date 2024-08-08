import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/apiAuth";

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  purchased_courses: string[];
}

export function useGetProfile() {
  const {
    data: profile,
    error,
    isLoading,
  } = useQuery<UserProfile, Error>({
    queryKey: ["getProfile"],
    queryFn: getUserProfile,
  });

  return {
    profile,
    loading: isLoading,
    error: error?.message || null,
  };
}
