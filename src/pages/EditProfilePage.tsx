import ProfileForm from "../components/ProfileForm";
import Spinner from "../components/Spinner";
import { useGetProfile } from "../hooks/useGetProfile";

function EditProfilePage() {
  const { profile, isLoading, error } = useGetProfile();

  if (isLoading) return <Spinner />;
  if (error) return <p>{error?.message}</p>;
  return profile ? <ProfileForm initialData={profile} /> : null;
}

export default EditProfilePage;
