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
    <div className="bg-[#2D2F31] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex-1 md:mr-10 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">{courseName}</h2>
          <p className="text-lg mb-4">{coursetitle}</p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="px-4 py-2 bg-orange text-white rounded-sm text-sm font-semibold">
              Best Seller
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-lg font-semibold">{courseRating}</p>
              <p className="text-sm text-gray-300">({ratingCount} ratings)</p>
            </div>
            <div className="text-sm text-gray-300">
              <p>{countstudent} students</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">Created by {instructor}</p>
        </div>

        <div className="flex-none text-gray3 bg-white p-6 rounded-lg shadow-lg">
          <img
            src={img}
            alt="Course"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="mb-4">
            <p className="text-2xl font-bold">${price}</p>
            <p className="text-sm text-gray-600">30-Day Money-Back Guarantee</p>
          </div>
          <button className="w-full bg-orange text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
