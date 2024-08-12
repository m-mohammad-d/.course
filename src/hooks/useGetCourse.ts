import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCourseById } from "../services/apiCourses";

function useGetCourse() {
  const { id } = useParams();

  const {data, error, isPending } = useQuery({
    queryKey: ["getCourse", id],
    queryFn: () => getCourseById(id),
  });

  return { data, error, isLoading: isPending };
}

export default useGetCourse;
