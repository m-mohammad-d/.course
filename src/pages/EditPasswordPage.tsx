import EditPasswordForm from "../components/EditPasswordForm";
import useGetEmailPassword from "../hooks/useGetEmaiPassword";

function EditPasswordPage() {
    const {data} = useGetEmailPassword()
  return (
    <div>
      <EditPasswordForm email={data} />
    </div>
  );
}

export default EditPasswordPage;
