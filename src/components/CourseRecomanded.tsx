import CourseCards from "./CourseCards";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const recommendedCourses = [
  {
    title: "The Complete Python Bootcamp From Zero to Hero in…",
    instructor: "Jose Portilla, Pierian Training",
    rating: 4.6,
    reviews: 513506,
    price: "€14.99",
    oldPrice: "€84.99",
    image: "https://img-b.udemycdn.com/course/750x422/2263832_ac7c_2.jpg",
  },
  {
    title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    instructor: "jonas",
    rating: 4.9,
    reviews: 56181,
    price: "€19.99",
    oldPrice: "€129.99",
    image: "https://img-b.udemycdn.com/course/750x422/4471614_361e_8.jpg",
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    rating: 4.7,
    reviews: 313806,
    price: "€14.99",
    oldPrice: "€104.99",
    image: "https://img-b.udemycdn.com/course/750x422/2776760_f176_10.jpg",
  },
  {
    title: "C++ Programming Bootcamp",
    instructor: "Ardit Sulce",
    rating: 4.6,
    reviews: 67303,
    price: "€14.99",
    oldPrice: "€99.99",
    image: "https://img-b.udemycdn.com/course/750x422/5187422_18d7_7.jpg",
  },
  {
    title: "C# Basics for Beginners: Learn C# Fundamentals by Coding",
    instructor: "mosh hamedani",
    rating: 4.6,
    reviews: 113655,
    price: "€14.99",
    oldPrice: "€84.99",
    image: "https://img-c.udemycdn.com/course/750x422/382002_5d4a_3.jpg",
  },
];

const CourseRecommendations = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-darkGray">
        What to learn next
      </h2>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-semibold text-mediumGray">
            Recommended for you
          </h3>
          <Link
            to="/courses"
            className="flex items-center gap-4 text-primary hover:text-darkOrange transition duration-300 ease-in-out"
          >
            <p>See all courses</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recommendedCourses.map((course, index) => (
            <CourseCards key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendations;
