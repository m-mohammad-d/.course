import CourseCards from "../components/CourseCards";
import Spinner from "../components/Spinner";
import useGetCoursesByInstructor from "../hooks/useGetCoursesByInstructor";
import useGetInstructorByUserid from "../hooks/useGetInstructorByUserId";
import { getItemLocal } from "../utils/localStorageUtils";

interface AuthToken {
  user: {
    id: string;
  };
}

function TeacherCourses() {
  const userId = getItemLocal<AuthToken>("sb-llgyyyodgevtfoidrwjf-auth-token")
    ?.user.id;

  const {
    data: instructor,
    isLoading: isInstructorLoading,
    error: isInstructorError,
  } = useGetInstructorByUserid(userId);

  const {
    data: courses,
    error,
    isLoading,
  } = useGetCoursesByInstructor(instructor?.id);

  if (isInstructorLoading || isLoading) {
    return <Spinner />;
  }

  if (isInstructorError || error) {
    return <p className="text-gray-600 text-lg">Error loading courses.</p>;
  }

  return (
    <div className=" bg-backgroundGray p-8">
      <div className="bg-primary text-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-extrabold text-center">Your Courses</h1>
      </div>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <CourseCards key={course.id} course={course} />
            ))
          ) : (
            <p className="text-gray-600 text-lg">No courses available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default TeacherCourses;
