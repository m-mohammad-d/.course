import Spinner from "../components/Spinner";
import User from "../components/User";
import useGetAllUser from "../hooks/useGetAllUser";

function ManageUsersPage() {
  const { data, error, isLoading } = useGetAllUser();

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-backgroundGray p-6 md:p-8">
      <header className="bg-primary text-white p-4 md:p-6 rounded-lg shadow-md mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold">Manage Users</h1>
      </header>
      <main>
        <div className="space-y-4 md:space-y-6">
          {data.users ? (
            data.users.map((user) => (
              <User
                key={user.id}
                userEmail={user.user_metadata.email}
                username={user.user_metadata["full_name"]}
                id={user.id}
              />
            ))
          ) : (
            <p className="text-gray-600 text-base md:text-lg">
              No users found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ManageUsersPage;
