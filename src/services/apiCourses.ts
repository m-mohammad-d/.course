import supabase from "./supabase";

export async function getCourse() {
  const { data: courses, error } = await supabase.from("courses").select("*");
  if (error) throw new Error(error.message);

  return courses;
}
