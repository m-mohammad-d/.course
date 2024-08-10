import EditPasswordForm from "../components/EditPasswordForm";
import useGetUserProfile from "../hooks/useGetUserProfile";

function EditPasswordPage() {
  const { data } = useGetUserProfile();
  return (
    <div>
      <EditPasswordForm email={data?.email} />
    </div>
  );
}

export default EditPasswordPage;
