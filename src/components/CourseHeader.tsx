import { IoStarSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";

interface CourseHeaderType {
  courseName: string;
  coursetitle: string;
  courseRating: string;
  ratingCount: number;
  instructor: string;
  countstudent: number;
  price: number;
  img: string;
}

function CourseHeader({
  courseName,
  coursetitle,
  courseRating,
  ratingCount,
  instructor,
  countstudent,
  price,
  img,
}: CourseHeaderType) {
  return (
    <div className="bg-darkGray text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex-1 md:mr-10 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">{courseName}</h2>
          <p className="text-lg mb-4">{coursetitle}</p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="px-4 py-2 bg-orangePeel rounded-sm text-sm font-semibold">
              Best Seller
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex gap-1 items-center">
                <IoStarSharp color="#FFD700" />
                <p className="font-semibold">{courseRating}</p>
              </div>
              <p className="text-sm">({ratingCount} ratings)</p>
            </div>
            <div className="flex items-center text-sm gap-2">
              <PiStudentFill size={17} />
              <p>{countstudent} students</p>
            </div>
          </div>
          <p className="text-sm">
            Created by <span className="text-orangePeel">{instructor}</span>
          </p>
        </div>

        <div className="text-darkGray bg-white p-6 rounded-lg shadow-lg">
          <img
            src={img}
            alt="Course"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="mb-4 flex justify-between items-center">
            <p className="text-2xl font-bold">${price}</p>
            <p className="text-sm text-gray-600">30-Day Money-Back Guarantee</p>
          </div>
          <button className="w-full bg-orangePeel text-white py-2 rounded-md hover:bg-darkOrange transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
