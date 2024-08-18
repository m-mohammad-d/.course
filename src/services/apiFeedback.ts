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
