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

  const { data: userMetadata, error: metadataError } =
    await supabase.auth.getUser();
  if (metadataError) {
    throw new Error(`Failed to fetch user metadata: ${metadataError.message}`);
  }

  const purchasedCourses: PurchasedCourse[] =
    userMetadata?.user.user_metadata?.purchased_courses || [];

  const newCourses: PurchasedCourse[] = courses.map((course) => ({
    id: course.courseId,
    name: course.courseName,
    image: course.courseImage,
    instructor: course.instructorName,
    purchased_at: new Date().toISOString(),
  }));

  newCourses.forEach((newCourse) => {
    const courseIndex = purchasedCourses.findIndex(
      (course) => course.id === newCourse.id
    );

    if (courseIndex === -1) {
      purchasedCourses.push(newCourse);
    } else {
      purchasedCourses[courseIndex] = newCourse;
    }
  });

  const { error: updateError } = await supabase.auth.updateUser({
    data: { purchased_courses: purchasedCourses },
  });

  if (updateError) {
    throw new Error(`Failed to update user metadata: ${updateError.message}`);
  }

  return true;
}
