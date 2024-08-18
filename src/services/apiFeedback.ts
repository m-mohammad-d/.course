import supabase from "./supabase";

export async function AddFeedBack(feedback: {
  name: string;
  description: string;
}) {
  const { data, error } = await supabase
    .from("feedBack")
    .insert([feedback])
    .select();

  if (error) throw new Error(error.message);

  return data;
}
export async function getAllFeedback() {
  const { data: feedBack, error } = await supabase.from("feedBack").select("*");
  if (error) throw new Error(error.message);
  return feedBack;
}

export async function deleteFeedback(id: number) {
  const { error } = await supabase.from("feedBack").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
