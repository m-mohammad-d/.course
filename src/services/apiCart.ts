import supabase from "./supabase";

interface AddCourseParams {
  courseId: string;
  courseName: string;
  courseImage: string;
  instructorName: string;
}

interface PurchasedCourse {
  id: string;
  name: string;
  image: string;
  instructor: string;
  purchased_at: string;
}

export async function addCourseToPurchaserCourses(courses: AddCourseParams[]) {

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(`Failed to get user: ${userError.message}`);
  }

  if (!user) {
    throw new Error("No user is currently logged in.");
  }

  const userMetadata = user.user.user_metadata;


  const purchasedCourses: PurchasedCourse[] =
    userMetadata?.purchased_courses || [];


  const newCourses: PurchasedCourse[] = courses.map((course) => ({
    id: course.courseId,
    name: course.courseName,
    image: course.courseImage,
    instructor: course.instructorName,
    purchased_at: new Date().toISOString(),
  }));


  const updatedCourses = new Map(
    [...purchasedCourses, ...newCourses].map((course) => [course.id, course])
  );


  const updatedCoursesArray = Array.from(updatedCourses.values());


  const { error: updateError } = await supabase.auth.updateUser({
    data: { purchased_courses: updatedCoursesArray },
  });

  if (updateError) {
    throw new Error(`Failed to update user metadata: ${updateError.message}`);
  }


  for (const course of courses) {
    await updateCourseStudentCount(course.courseId);
  }

  return true;
}

async function updateCourseStudentCount(courseId: string) {

  const { data: course, error } = await supabase
    .from("courses")
    .select("countstudent")
    .eq("id", courseId)
    .single();

  if (error) {
    throw new Error(`Failed to fetch course: ${error.message}`);
  }

  const newCount = (course?.countstudent || 0) + 1;

  const { error: updateError } = await supabase
    .from("courses")
    .update({ countstudent: newCount })
    .eq("id", courseId);

  if (updateError) {
    throw new Error(
      `Failed to update course student count: ${updateError.message}`
    );
  }
}
