import supabase from "./supabase";
export interface InstructorType {
  name: string;
  bio: string;
  job_title: string;
  image_url: string;
  user_id: string;
}

export async function getInstructorById(instructorId: string | undefined) {
  if (!instructorId) throw new Error("Instructor ID is required");

  const { data: instructor, error } = await supabase
    .from("instructors")
    .select("*")
    .eq("id", instructorId)
    .single();

  if (error) {
    console.error("Error fetching instructor:", error.message);
    throw new Error(error.message);
  }

  return instructor;
}

export async function addInstructorRequest(teacher: InstructorType) {
  const { data, error } = await supabase.from("instructors").insert([
    {
      name: teacher.name,
      image_url: teacher["image_url"],
      bio: teacher.bio,
      job_title: teacher.job_title,
      user_id: teacher.user_id,
      isConfirm: false,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getTeacherRequests() {
  const { data, error } = await supabase
    .from("instructors")
    .select("*")
    .eq("isConfirm", false);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function confirmTeacherRequest(id: string) {
  const { data, error } = await supabase
    .from("instructors")
    .update({ isConfirm: true })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function rejectTeacherRequest(id: string) {
  const { error } = await supabase.from("instructors").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
export async function getInstructorByUserid(id: string) {
  const { data, error } = await supabase
    .from("instructors")
    .select("*")
    .eq("user_id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }

  return data;
}
