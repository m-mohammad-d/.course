import React from "react";

interface CourseCardType {
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: string;
  oldPrice: string;
  image: string;
  bestseller?: boolean; // اضافه کردن خاصیت bestseller به عنوان اختیاری
}

interface CourseCardProps {
  course: CourseCardType;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-md font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-1">{course.instructor}</p>
        <div className="flex items-center mb-1">
          <span className="text-yellow-500 text-sm font-bold">
            {course.rating}
          </span>
          <span className="text-gray-500 text-xs ml-1">
            ({course.reviews.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-bold">{course.price}</span>
          <span className="text-sm line-through text-gray-400 ml-2">
            {course.oldPrice}
          </span>
        </div>
        {course.bestseller && (
          <span className="inline-block bg-yellow-500 text-white text-xs font-semibold mt-2 px-2 py-1 rounded">
            Bestseller
          </span>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
