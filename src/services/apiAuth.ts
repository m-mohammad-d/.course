import supabase from "./supabase";

interface loginType {
  email: string;
  password: string;
}
interface signUpType extends loginType {
  full_name: string;
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

export async function signup({ email, password, full_name }: signUpType) {
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    throw new Error(signUpError.message);
  }

  if (signUpData?.user) {
    const { error: insertError } = await supabase.from("profiles").insert({
      id: signUpData.user.id,
      full_name,
      purchased_courses: [],
    });

    if (insertError) {
      throw new Error(insertError.message);
    }

    return signUpData;
  }

  throw new Error("User registration failed.");
}

export async function getUserProfile() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  if (!user) {
    throw new Error("No active user session");
  }

  const userId = user.id;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (profileError) {
    throw new Error(profileError.message);
  }

  return profile;
}
