import supabase from "./supabase";

interface loginType {
  email: string;
  password: string;
}
interface signUpType extends loginType {
  full_name: string;
}
export interface UpdateProfileType {
  full_name: string;
  headline: string;
  description: string;
  website: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
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
    options: {
      data: {
        full_name,
        headline: "",
        description: "",
        website: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        roles: "user",
        purchased_courses: [],
      },
    },
  });

  if (signUpError) {
    throw new Error(signUpError.message);
  }

  return signUpData;
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

  const userProfile = {
    email: user.email,
    full_name: user.user_metadata.full_name,
    headline: user.user_metadata.headline,
    description: user.user_metadata.description,
    website: user.user_metadata.website,
    twitter: user.user_metadata.twitter,
    facebook: user.user_metadata.facebook,
    linkedin: user.user_metadata.linkedin,
    youtube: user.user_metadata.youtube,
    purchased_courses: user.user_metadata.purchased_courses,
  };

  return userProfile;
}

export async function updateProfile(profileData: UpdateProfileType) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    throw new Error(authError.message);
  }

  if (!user) {
    throw new Error("No active user session");
  }

  const { error: updateError } = await supabase.auth.updateUser({
    data: {
      full_name: profileData.full_name,
      headline: profileData.headline,
      description: profileData.description,
      website: profileData.website,
      twitter: profileData.twitter,
      facebook: profileData.facebook,
      linkedin: profileData.linkedin,
      youtube: profileData.youtube,
    },
  });

  if (updateError) {
    throw new Error(updateError.message);
  }

  return true;
}

export async function userLogOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function updatePassword(password: string) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
