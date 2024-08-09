import { useQuery } from "@tanstack/react-query";
import { getUserEmail } from "../services/apiAuth";

function useGetEmailPassword() {
  const { data, error } = useQuery<string, Error>({
    queryFn: async () => {
      const result = await getUserEmail();
      return result || "";
    },
    queryKey: ["getUserEmailPassword"],
  });

  return {
    data,
    error: error?.message || null,
  };
}

export default useGetEmailPassword;
