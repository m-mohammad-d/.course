import { FaStar, FaUserFriends } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";

function CourseInstructor({ Instructor }: { Instructor: string }) {
  return (
    <div className="p-6 bg-lightGray rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Instructor</h2>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
          <a href="/user/jonasschmedtmann/" className="shrink-0">
            <img
              src="https://img-b.udemycdn.com/user/200_H/7799204_2091_5.jpg"
              alt="Jonas Schmedtmann"
              className="w-28 h-28 rounded-full border-4 border-gray-200 lg:w-32 lg:h-32"
            />
          </a>
          <div className="flex flex-col">
            <div className="text-xl font-semibold text-gray-800">
              <a href="/user/jonasschmedtmann/" className="hover:text-blue-600">
                {Instructor}
              </a>
            </div>
            <div className="text-md text-gray-600">
              Web Developer, Designer, and Teacher
            </div>
          </div>
        </div>
        <ul className="text-sm text-gray-600 space-y-2 lg:ml-auto flex flex-col items-start lg:items-end lg:flex-1">
          <li className="flex items-center gap-2">
            <FaStar size={17} className="text-yellow-500" />
            <span>4.7 Instructor Rating</span>
          </li>
          <li className="flex items-center gap-2">
            <LiaCertificateSolid size={17} className="text-blue-500" />
            <span>445,897 Reviews</span>
          </li>
          <li className="flex items-center gap-2">
            <FaUserFriends size={17} className="text-green-500" />
            <span>2,004,795 Students</span>
          </li>
          <li className="flex items-center gap-2">
            <IoIosPlayCircle size={17} className="text-red-500" />
            <span>7 Courses</span>
          </li>
        </ul>
      </div>
      <div className="mt-6 text-sm text-gray-700">
        <p className="line-clamp-6 lg:line-clamp-none">
          Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium
          courses have earned the best-selling status for outstanding
          performance and student satisfaction. I'm a full-stack web developer
          and designer with a passion for building beautiful web interfaces from
          scratch. I've been building websites and apps since 2010 and also have
          a Master's degree in Engineering. But see for yourself, enroll in one
          of my courses, and join 1,500,000+ happy students today.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default CourseInstructor;
