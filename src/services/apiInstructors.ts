import supabase from "./supabase";

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