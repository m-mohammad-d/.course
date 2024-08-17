import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../services/apiUser";

function useGetAllUser() {
  const { data, error, isLoading } = useQuery({
    queryFn: getAllUser,
    queryKey: ["getAllUser"], 
  });

  return {
    data: data || { users: [] },
    error: error?.message || null,
    isLoading,
  };
}

export default useGetAllUser;
