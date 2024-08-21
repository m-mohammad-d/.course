import CourseCards from "./CourseCards";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetCourses from "../hooks/useGetCourses";
import Spinner from "./Spinner";

const CourseRecommendations = () => {
  const { data, isLoading } = useGetCourses("");
  const recommendedCourses = data?.slice(1, 6); 

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-7xl px-4 mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-darkGray">
        What to learn next
      </h2>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold text-mediumGray">
            Recommended for you
          </h3>
          <Link
            to="/courses"
            className="flex items-center gap-2 text-primary hover:text-darkOrange transition duration-300 ease-in-out"
          >
            <p className="hidden sm:inline">See all courses</p>
            <FaArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {recommendedCourses.map((course, index) => (
            <CourseCards key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendations;
