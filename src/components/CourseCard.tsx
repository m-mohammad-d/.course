import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  name: string;
  image: string;
  title: string;
  comments: string[];
  rating: number;
  price: string;
  coursetime: number;
  lectures: number;
  instructors: {
    name: string;
  };
}

function CourseCard({
  id,
  name,
  image,
  title,
  comments,
  rating,
  price,
  coursetime,
  lectures,
  instructors,
}: CourseCardProps) {
  return (
    <div className="flex border rounded-lg shadow-xl p-6 bg-softWhite">
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
            <h2 className="text-2xl font-bold text-darkGray hover:text-primary transition duration-300 ease-in-out">
              {name}
            </h2>
          </Link>
          <p className="text-textGray mt-2">{title}</p>
          <p className="text-sm text-mediumGray mt-7">
            By {instructors?.name || "Unknown"}
          </p>
        </div>
        <div className="flex items-center mt-4 text-sm text-mediumGray">
          <span className="text-accentYellow font-semibold">{rating} ⭐</span>
          <span className="ml-2">({comments?.length})</span>
          <span className="ml-2">
            • {coursetime} hours • {lectures} lectures
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end text-xl font-bold text-primary">
        <span>€{price}</span>
      </div>
    </div>
  );
}

export default CourseCard;
