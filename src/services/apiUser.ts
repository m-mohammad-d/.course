import supabase from "./supabase";

export async function getAllUser() {
  const { data: users, error } = await supabase.auth.admin.listUsers();

  if (error) {
    console.error("Error fetching courses:", error.message);
    throw new Error(error.message);
  }

  return users;
}

export async function deleteUser(id: string) {
  const { data, error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    console.error("Error fetching courses:", error.message);
    throw new Error(error.message);
  }

  return data;
}
