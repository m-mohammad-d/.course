import React from "react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: number;
  name: string;
  image: string;
  title: string;
  comments: string[];
  instructor: string;
  rating: number;
  price: string;
  coursetime: number;
  lectures: number;
}

function CourseCard({
  id,
  name,
  image,
  title,
  instructor,
  comments,
  rating,
  price,
  coursetime,
  lectures,
}: CourseCardProps) {
  return (
    <div className="flex border rounded-lg shadow-xl p-6 bg-white">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow ml-4">
        <div>
          <Link to={`/course/${id}`}>
            <h2 className="text-2xl font-bold">{name}</h2>
          </Link>
          <p className="text-gray-700 mt-2">{title}</p>
          <p className="text-sm text-gray-500 mt-7">By {instructor}</p>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-yellow-500 font-semibold">{rating} ⭐</span>
          <span className="text-gray-500 ml-2">({comments?.length})</span>
          <span className="text-gray-500 ml-2">
            • {coursetime} hours • {lectures} lectures
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end text-xl font-bold text-orange ml-4">
        <span>€{price}</span>
      </div>
    </div>
  );
}

export default CourseCard;
