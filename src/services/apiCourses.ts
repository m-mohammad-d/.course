import supabase from "./supabase";

export async function getCourse() {
  const { data: courses, error } = await supabase.from("courses").select("*");
  if (error) throw new Error(error.message);

  return courses;
}

export async function getCourseById(courseId: string | undefined) {
  const { data: course, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

  if (error) {
    console.error("Error fetching course:", error.message);
  }
  return { course };
}

export async function getCoursesByInstructor(instructorId: string) {
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