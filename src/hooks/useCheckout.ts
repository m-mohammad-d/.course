import { useMutation } from "@tanstack/react-query";

import { addCourseToPurchaserCourses } from "../services/apiCart";

export function useCheckout() {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: addCourseToPurchaserCourses,
    mutationKey: ["addCourseToPurchaserCourses"],
  });

  return { mutate, isLoading: isPending, isSuccess, isError };
}
