import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveCourse, rejectCourse } from "../services/apiCourses";
import { toast } from "react-hot-toast";

export function useApproveCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => approveCourse(courseId),
    onSuccess: () => {
      toast.success("Course approved successfully!");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error: Error) => {
      toast.error(`Failed to approve course: ${error.message}`);
    },
  });
}

export function useRejectCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => rejectCourse(courseId),
    onSuccess: () => {
      toast.success("Course rejected and removed!");
      queryClient.invalidateQueries({ queryKey: ["courses"] }); 
    },
    onError: (error: Error) => {
      toast.error(`Failed to reject course: ${error.message}`);
    },
  });
}
