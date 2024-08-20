import { Link } from "react-router-dom";

interface CourseCardType {
  id: number;
  image: string;
  title?: string;
  name: string;
  instructors?: {
    name: string;
  };
  instructor?: string;
  rating?: number;
  reviews?: number;
  price?: string;
  oldPrice?: string;
  bestseller?: boolean;
  purchased_at?: string;
}

interface CourseCardProps {
  course: CourseCardType;
}

function CourseCards({ course }: CourseCardProps) {
  const purchaseDate = course.purchased_at
    ? new Date(course.purchased_at).toLocaleDateString()
    : undefined;

  return (
    <div className="flex flex-col bg-softWhite shadow-xl rounded-lg overflow-hidden h-80">
      <img
        src={course.image}
        alt={course.title || course.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4 flex-grow">
        <Link
          to={`/course/${course.id}`}
          className="text-md font-semibold mb-2 text-darkGray hover:text-darkOrange transition duration-300"
        >
          {course.title || course.name}
        </Link>
        <p className="text-mediumGray text-sm mb-1">
          {course.instructors?.name || course.instructor}
        </p>
        {course.rating && (
          <div className="flex items-center mb-1">
            <span className="text-accentYellow text-sm font-bold">
              {course.rating}
            </span>
            {course.reviews && (
              <span className="text-gray-500 text-xs ml-1">
                ({course.reviews})
              </span>
            )}
          </div>
        )}
        {course.price && (
          <div className="flex items-center">
            <span className="text-lg font-bold text-primary">
              {course.price}
            </span>
            {course.oldPrice && (
              <span className="text-sm line-through text-mediumGray ml-2">
                {course.oldPrice}
              </span>
            )}
          </div>
        )}
        {course.bestseller && (
          <span className="inline-block bg-accentYellow text-softWhite text-xs font-semibold mt-2 px-2 py-1 rounded">
            Bestseller
          </span>
        )}
        {purchaseDate && (
          <p className="text-sm text-textGray mt-2">
            Purchased on: {purchaseDate}
          </p>
        )}
      </div>
    </div>
  );
}

export default CourseCards;
