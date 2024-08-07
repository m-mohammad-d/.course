import supabase from "./supabase";
interface loginType {
  email: string;
  password: string;
}
export async function login({ email, password }: loginType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
