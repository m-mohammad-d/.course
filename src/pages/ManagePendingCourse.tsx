import PendingCourseItem from "../components/PendingCourseItem";
import Spinner from "../components/Spinner";
import useGetPendingCourse from "../hooks/useGetPendingCourse";

function ManagePendingCourse() {
  const { data: courses, isLoading } = useGetPendingCourse();
  if (isLoading) return <Spinner />;
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Pending Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <PendingCourseItem
            key={course.id}
            name={course.name}
            title={course.title}
            image={course.image}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ManagePendingCourse;
