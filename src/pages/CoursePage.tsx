import CourseComments from "../components/CourseComments";
import CourseContent from "../components/CourseContent";
import CourseFeatures from "../components/CourseFeatures";
import CourseHeader from "../components/CourseHeader";
import CourseInstructor from "../components/CourseInstructor";
import CourseRequirements from "../components/CourseRequirements";
import Spinner from "../components/Spinner";
import TopCompaniesNotice from "../components/TopCompaniesNotice";
import useGetCourse from "../hooks/useGetCourse";
import useGetInstructor from "../hooks/useGetInstructor";

function CoursePage() {
  const {
    data: courseData,
    error: courseError,
    isLoading: isCourseLoading,
  } = useGetCourse();
  const instructorId = courseData?.course.instructorId;
  const {
    data: instructorData,
    error: instructorError,
    isLoading: isInstructorLoading,
  } = useGetInstructor(instructorId);
  console.log(instructorData);

  if (isCourseLoading || isInstructorLoading) return <Spinner />;
  if (courseError || instructorError)
    return <p>{courseError?.message || instructorError?.message}</p>;

  return (
    <div>
      <CourseHeader
        courseName={courseData?.course.name}
        coursetitle={courseData?.course.title}
        courseRating={courseData?.course.rating}
        ratingCount={courseData?.course.comments?.length}
        instructor={instructorData.name}
        countstudent={courseData?.course.student_count}
        price={courseData?.course.price}
        img={courseData?.course.image}
      />
      <div className="container mx-auto px-4 my-6">
        <CourseFeatures courseTime={courseData?.course.coursetime} />
        <TopCompaniesNotice />
        <CourseContent
          courseSection={courseData?.course.section}
          courseTime={courseData?.course.coursetime}
          courselectures={courseData?.course.lectures}
        />
        <CourseRequirements requirements={courseData?.course.Requirements} />
        <CourseInstructor instructor={instructorData} />
        <CourseComments
          courseRating={courseData?.course.rating}
          comments={courseData?.course.comments}
        />
      </div>
    </div>
  );
}

export default CoursePage;
