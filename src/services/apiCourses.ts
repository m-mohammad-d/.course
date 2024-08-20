import supabase from "./supabase";

export async function getCourse() {
  const { data: courses, error } = await supabase.from("courses").select(`
    *,
    instructors (
      name
    )
  `);

  if (error) throw new Error(error.message);

  return courses;
}

export async function getCourseById(courseId: string | undefined) {
  if (!courseId) throw new Error("Course ID is required");

  const { data: course, error } = await supabase
    .from("courses")
    .select(
      `
    *,
    instructors (
      id,
      name,
      bio,
      job_title,
      image_url,
      rating,
      reviews_count,
      students_count

    )
  `
    )
    .eq("id", courseId)
    .single();

  if (error) {
    console.error("Error fetching course:", error.message);
    throw new Error(error.message);
  }

  return course;
}

export async function getCoursesByInstructor(instructorId: string | undefined) {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("instructorId", instructorId);

  if (error) {
    console.error("Error fetching courses:", error.message);
    throw new Error(error.message);
  }

  return courses;
}

interface CourseParams {
  name: string;
  title: string;
  price: number;
  imageUrl: string;
  sections: number;
  coursetime: string;
  requirements: string;
  lectures: number;
  instructorId: string;
}

export async function addCourse(course: CourseParams) {
  const {
    name,
    title,
    price,
    imageUrl,
    sections,
    coursetime,
    requirements,
    lectures,
    instructorId,
  } = course;

  const { data, error } = await supabase
    .from("courses")
    .insert([
      {
        name,
        title,
        price,
        image: imageUrl,
        section: sections,
        coursetime,
        Requirements: requirements,
        lectures,
        instructorId: instructorId,
        isConfirmed: false,
      },
    ])
    .select();

  if (error) {
    console.error(error);

    throw new Error(`Failed to add course: ${error.message}`);
  }

  return data;
}

export async function getCoursePending() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("isConfirmed", false);

  if (error) {
    console.error("Error fetching unconfirmed courses:", error);
    return [];
  }

  return data;
}

export async function approveCourse(courseId: string) {
  if (!courseId) throw new Error("Course ID is required");

  const { data, error } = await supabase
    .from("courses")
    .update({ isConfirmed: true })
    .eq("id", courseId)
    .select();

  if (error) {
    console.error("Error approving course:", error.message);
    throw new Error(`Failed to approve course: ${error.message}`);
  }

  return data;
}
export async function rejectCourse(courseId: string) {
  if (!courseId) throw new Error("Course ID is required");

  const { data, error } = await supabase
    .from("courses")
    .delete()
    .eq("id", courseId)
    .select();

  if (error) {
    console.error("Error rejecting course:", error.message);
    throw new Error(`Failed to reject course: ${error.message}`);
  }

  return data;
}
