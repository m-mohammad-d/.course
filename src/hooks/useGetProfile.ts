import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/apiAuth";

interface UserProfile {
  full_name: string;
  headline: string;
  description: string;
  website: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
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
    isLoading,
    error,
  };
}
