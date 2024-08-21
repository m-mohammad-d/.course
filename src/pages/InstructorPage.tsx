import { useParams } from "react-router-dom";
import InstructorProfile from "../components/InstructorProfile";
import useGetCoursesByInstructor from "../hooks/useGetCoursesByInstructor";
import CourseCards from "../components/CourseCards";
import Spinner from "../components/Spinner";

function InstructorProfilePage() {
  const { id } = useParams();
  const { data, isLoading } = useGetCoursesByInstructor(id);
  if (isLoading) return <Spinner />;
  return (
    <div className="container mx-auto p-6">
      <InstructorProfile />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-darkGray">My courses ({data?.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data?.map((course) => (
            <CourseCards course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstructorProfilePage;
