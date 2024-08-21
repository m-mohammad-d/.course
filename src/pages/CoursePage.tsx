import AddCommentModal from "../components/AddCommentModal";
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

  if (courseError || !courseData) {
    return (
      <div className="container mx-auto px-4 my-6 text-center">
        <p className="text-2xl text-textGray">This course does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <CourseHeader
        id={courseData.id}
        courseName={courseData?.name}
        coursetitle={courseData?.title}
        courseRating={courseData?.rating}
        ratingCount={courseData?.comments?.length}
        instructor={courseData?.instructors.name}
        countstudent={courseData?.countstudent}
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
        {courseData.comments?.length > 0 ? (
          <CourseComments
            courseRating={courseData?.rating}
            comments={courseData.comments}
          />
        ) : (
          <p className="text-2xl mt-8">This course has no comments</p>
        )}
        <AddCommentModal
          comments={courseData.comments || []}
          id={courseData.id}
        />
      </div>
    </div>
  );
}

export default CoursePage;
