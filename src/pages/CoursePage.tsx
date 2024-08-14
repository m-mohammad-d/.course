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
  const instructorId = courseData?.instructorId;
  console.log(courseData);

  const {
    data: instructorData,
    error: instructorError,
    isLoading: isInstructorLoading,
  } = useGetInstructor(instructorId);

  if (isCourseLoading || isInstructorLoading) return <Spinner />;
  if (courseError || instructorError)
    return <p>{courseError?.message || instructorError?.message}</p>;

  return (
    <div>
      <CourseHeader
        courseName={courseData?.name}
        coursetitle={courseData?.title}
        courseRating={courseData?.rating}
        ratingCount={courseData?.comments?.length}
        instructor={instructorData.name}
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
        <CourseInstructor instructor={instructorData} />
        <CourseComments
          courseRating={courseData?.rating}
          comments={courseData?.comments}
        />
      </div>
    </div>
  );
}

export default CoursePage;
