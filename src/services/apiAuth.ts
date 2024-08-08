import supabase from "./supabase";
interface loginType {
  email: string;
  password: string;
}
interface SignupType extends loginType {
  full_name: string;
}
export async function login({ email, password }: loginType) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    throw new Error("Invalid email or password");
  }

  if (password !== data.password) {
    throw new Error("Invalid email or password");
  }

  return data;
}



export async function signup({ email, password, full_name }: SignupType) {

  const { data, error } = await supabase.from("users").insert({
    email,
    password,
    full_name,
    purchased_courses: [],
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
