interface CourseCardType {
  id: string;
  title: string;
  instructors: {
    name: string;
  };
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

function CourseCardManagement({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full h-[400px] sm:h-[420px] lg:h-[450px] relative">
      <div className="overflow-hidden rounded-t-xl h-1/2 relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {course.bestseller && (
          <div className="absolute top-2 left-2 bg-primary text-softWhite text-xs font-bold px-2 py-1 rounded-lg z-10 shadow">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-darkGray text-lg font-bold mb-1 truncate">{course.title}</h3>
        <p className="text-mediumGray text-sm mb-3">{course.instructors.name}</p>
        <div className="flex items-center mb-2">
          <span className="text-accentYellow text-sm font-bold">{course.rating}</span>
          <span className="text-gray-500 text-xs ml-2">({course.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{course.price}</span>
          {course.oldPrice && (
            <span className="line-through text-textGray text-sm">{course.oldPrice}</span>
          )}
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button className="bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCardManagement;
