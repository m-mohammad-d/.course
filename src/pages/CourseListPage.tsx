import { useState } from "react";
import CourseCard from "../components/CourseCard";
import Spinner from "../components/Spinner";
import useGetCourses from "../hooks/useGetCourses";

function CourseListPage() {
  const { data: courses, isLoading } = useGetCourses();
  console.log(courses);

  const [sortOption, setSortOption] = useState<string>("default");

  if (isLoading) return <Spinner />;

  const confirmedCourses = courses.filter((course) => course.isConfirmed);

  const sortedCourses = confirmedCourses.sort((a, b) => {
    switch (sortOption) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "students":
        return b.countstudent - a.countstudent;
      case "price":
        return parseFloat(a.price) - parseFloat(b.price);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto p-6">
      <div>
        <h2 className="text-gray1 font-bold text-2xl">
          {sortedCourses.length} results for courses
        </h2>
      </div>
      <div className="flex justify-between items-center my-6">
        <select
          className="p-2 border rounded-md bg-lightGray text-gray3"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="students">Number of Students</option>
          <option value="price">Price</option>
        </select>
        <p>{sortedCourses.length} results</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default CourseListPage;
