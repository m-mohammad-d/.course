import CourseComments from "../components/CourseComments";
import CourseContent from "../components/CourseContent";
import CourseFeatures from "../components/CourseFeatures";
import CourseHeader from "../components/CourseHeader";
import CourseInstructor from "../components/CourseInstructor";
import CourseRequirements from "../components/CourseRequirements";
import Spinner from "../components/Spinner";
import TopCompaniesNotice from "../components/TopCompaniesNotice";
import useGetCourse from "../hooks/useGetCourse";

function CoursePage() {
  const {
    data: courseData,
    error: courseError,
    isLoading: isCourseLoading,
  } = useGetCourse();

  if (isCourseLoading) return <Spinner />;
  if (courseError) return <p>{courseError?.message}</p>;

  return (
    <div>
      <CourseHeader
        id={courseData.id}
        courseName={courseData?.name}
        coursetitle={courseData?.title}
        courseRating={courseData?.rating}
        ratingCount={courseData?.comments?.length}
        instructor={courseData?.instructors.name}
        countstudent={courseData?.student_count}
        price={courseData?.price}
        img={courseData?.image}
      />
      <div className="container mx-auto px-4 my-6">
        <CourseFeatures courseTime={courseData?.coursetime} />
        <TopCompaniesNotice />
        <CourseContent
          courseSection={courseData?.section}
          courseTime={courseData?.coursetime}
          courselectures={courseData?.lectures}
        />
        <CourseRequirements requirements={courseData?.Requirements} />
        <CourseInstructor instructor={courseData?.instructors} />
        <CourseComments
          courseRating={courseData?.rating}
          comments={courseData?.comments}
        />
      </div>
    </div>
  );
}

export default CoursePage;
