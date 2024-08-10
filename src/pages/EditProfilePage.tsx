import ProfileForm from "../components/ProfileForm";
import Spinner from "../components/Spinner";
import useGetUserProfile from "../hooks/useGetUserProfile";

function EditProfilePage() {
  const { data, isLoading, error } = useGetUserProfile();

  if (isLoading) return <Spinner />;
  if (error) return <p>{error}</p>;
  return data ? <ProfileForm initialData={data} /> : null;
}

export default EditProfilePage;
