import CourseCardManagement from "../components/CourseCardManagement";
import Spinner from "../components/Spinner";
import useGetCourses from "../hooks/useGetCourses";

function ManageCoursesPage() {
  const { data, isLoading } = useGetCourses();
  if (isLoading) return <Spinner />;
  return (
    <div className="min-h-screen bg-backgroundGray p-8">
      <header className="bg-primary text-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-extrabold text-center">Manage courses</h1>
      </header>{" "}
      <main>
        <div className=" grid grid-cols-3 gap-2 gap-y-8">
          {data ? (
            data.map((course) => (
              <CourseCardManagement key={course.id} course={course} />
            ))
          ) : (
            <p className="text-gray-600 text-lg">No users found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ManageCoursesPage;
