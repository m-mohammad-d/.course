import CourseCards from "../components/CourseCards";
import Spinner from "../components/Spinner";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { Link } from "react-router-dom";

function MyCourse() {
  const { data, isLoading } = useGetUserProfile();

  if (isLoading) return <Spinner />;

  const purchasedCourses = data?.purchased_courses || [];

  return (
    <div className="shadow-2xl rounded-lg h-full py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-center text-darkGray mb-12">
          My Purchased Courses
        </h2>

        {purchasedCourses.length > 0 ? (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purchasedCourses.map((course) => (
              <CourseCards key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-12 px-4 py-8 bg-softWhite shadow-lg rounded-lg">
            <p className="text-lg font-semibold text-darkGray mb-4">
              No courses purchased yet.
            </p>
            <p className="text-base text-textGray mb-6">
              Explore our catalog to find courses that interest you and start
              learning today!
            </p>
            <Link
              to="/courses"
              className="inline-block px-6 py-3 bg-primary text-softWhite font-semibold rounded-lg shadow-md hover:bg-darkOrange transition duration-300"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCourse;
