import CourseHeader from "../components/CourseHeader";
import useGetCourse from "../hooks/useGetCourse";

function CoursePage() {
  const { data, error } = useGetCourse();
  console.log(data);

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <CourseHeader
        courseName={data?.course.name}
        coursetitle={data?.course.title}
        courseRating={data?.course.rating}
        ratingCount={data?.course.comments.length}
        instructor={data?.course.instructor}
        countstudent={data?.course.countstudent}
        price={data?.course.price}
        img={data?.course.image}
      />
    </div>
  );
}

export default CoursePage;
