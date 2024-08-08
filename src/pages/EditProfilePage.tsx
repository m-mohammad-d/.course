import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/apiAuth";
import ProfileForm from "../components/ProfileForm";
import Spinner from "../components/Spinner";

function ProfilePage() {
  const { data: profileData, error, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  if (isLoading) return <Spinner />;
  if (error instanceof Error) return <p>{error.message}</p>;

  return profileData ? <ProfileForm initialData={profileData} /> : null;
}

export default ProfilePage;
