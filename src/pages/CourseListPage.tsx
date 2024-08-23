import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Spinner from "../components/Spinner";
import useGetCourses from "../hooks/useGetCourses";

function CourseListPage() {
  const location = useLocation();
  const [sortOption, setSortOption] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    setSearchQuery(query || "");
  }, [location.search]);

  const { data: courses, isLoading } = useGetCourses(searchQuery);

  if (isLoading) return <Spinner />;

  const filteredCourses = courses.filter((course) => course.isConfirmed);

  const sortedCourses = filteredCourses.sort((a, b) => {
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
        <h2 className="text-darkBlue font-bold text-2xl">
          {sortedCourses.length} results for courses
        </h2>
      </div>
      <div className="flex justify-between items-center my-6">
        <select
          className="p-2 border rounded-md bg-lightGray text-darkGray"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="students">Number of Students</option>
          <option value="price">Price</option>
        </select>
        <p className="text-darkGray">{sortedCourses.length} results</p>
      </div>

      {sortedCourses.length === 0 ? (
        <p className="text-red-500 font-semibold text-center">
          Course not found
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseListPage;
