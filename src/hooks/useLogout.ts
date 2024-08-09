import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "../services/apiAuth";

export function useLogout() {
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: userLogOut,
    onSuccess() {
      queryClient.removeQueries();
      navigator("/login", { replace: true });
    },
  });

  return { logout, isPending };
}
