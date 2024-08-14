import CourseContent from "../components/CourseContent";
import CourseFeatures from "../components/CourseFeatures";
import CourseHeader from "../components/CourseHeader";
import CourseInstructor from "../components/CourseInstructor";
import CourseRequirements from "../components/CourseRequirements";
import Spinner from "../components/Spinner";
import TopCompaniesNotice from "../components/TopCompaniesNotice";
import useGetCourse from "../hooks/useGetCourse";

function CoursePage() {
  const { data, error, isLoading } = useGetCourse();
  console.log(data);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <Spinner />;
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
      <div className="container mx-auto px-4">
        <CourseFeatures courseTime={data?.course.coursetime} />
        <TopCompaniesNotice />
        <CourseContent
          courseSection={data?.course.section}
          courseTime={data?.course.coursetime}
          courselectures={data?.course.lectures}
        />
        <CourseRequirements requirements={data?.course.Requirements} />
        <CourseInstructor Instructor={data?.course.instructor} />
      </div>
    </div>
  );
}

export default CoursePage;
