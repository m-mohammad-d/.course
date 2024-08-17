import { FaStar, FaUserFriends } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import useGetCoursesByInstructor from "../hooks/useGetCoursesByInstructor";
import { Link } from "react-router-dom";

function CourseInstructor({
  instructor,
}: {
  instructor: {
    id: string;
    name: string;
    bio: string;
    job_title: string;
    image_url: string;
    rating: number;
    reviews_count: number;
    students_count: number;
  };
}) {
  const { data, isLoading, error } = useGetCoursesByInstructor(instructor.id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses: {error.message}</p>;

  return (
    <div className="p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-darkGray">Instructor</h2>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
          <Link to={`/user/${instructor.id}`} className="shrink-0">
            <img
              src={instructor.image_url}
              alt={instructor.name}
              className="w-28 h-28 rounded-full border-4 border-gray-200 lg:w-32 lg:h-32"
            />
          </Link>
          <div className="flex flex-col">
            <div className="text-xl font-semibold text-gray-800">
              <Link
                to={`/Instructor/${instructor.id}`}
                className="hover:text-orange transition-all delay-100"
              >
                {instructor.name}
              </Link>
            </div>
            <div className="text-md text-mediumGray mt-2">
              {instructor.job_title}
            </div>
          </div>
        </div>
        <ul className="text-sm text-textGray space-y-2 lg:ml-auto flex flex-col items-start lg:items-end lg:flex-1">
          <li className="flex items-center gap-2">
            <FaStar size={17} className="text-yellow-500" />
            <span>{instructor.rating} Rating</span>
          </li>
          <li className="flex items-center gap-2">
            <LiaCertificateSolid size={17} className="text-blue-500" />
            <span>{instructor["reviews_count"]} Reviews</span>
          </li>
          <li className="flex items-center gap-2">
            <FaUserFriends size={17} className="text-green-500" />
            <span>{instructor["students_count"]} Students</span>
          </li>
          <li className="flex items-center gap-2">
            <IoIosPlayCircle size={17} className="text-red-500" />
            <span>{data?.length} Courses</span>
          </li>
        </ul>
      </div>
      <div className="mt-6 text-sm text-textGray">
        <p className="line-clamp-6 lg:line-clamp-none">{instructor.bio}</p>
        <button className="mt-4 px-4 py-2 bg-deepBlue text-white rounded-md  transition-all duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default CourseInstructor;
