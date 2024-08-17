interface CourseCardType {
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: string;
  oldPrice: string;
  image: string;
  bestseller?: boolean;
}

interface CourseCardProps {
  course: CourseCardType;
}

function CourseCards({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col bg-softWhite shadow-xl rounded-lg overflow-hidden h-80">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-md font-semibold mb-2 text-darkGray">
          {course.title}
        </h3>
        <p className="text-mediumGray text-sm mb-1">{course.instructor}</p>
        <div className="flex items-center mb-1">
          <span className="text-accentYellow text-sm font-bold">
            {course.rating}
          </span>
          <span className="text-gray-500 text-xs ml-1">({course.reviews})</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-bold text-primary">{course.price}</span>
          <span className="text-sm line-through text-mediumGray ml-2">
            {course.oldPrice}
          </span>
        </div>
        {course.bestseller && (
          <span className="inline-block bg-accentYellow text-softWhite text-xs font-semibold mt-2 px-2 py-1 rounded">
            Bestseller
          </span>
        )}
      </div>
    </div>
  );
}

export default CourseCards;
