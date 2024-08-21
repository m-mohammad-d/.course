import useDeleteUser from "../hooks/useDeleteUser";

interface User {
  id: string;
  username: string;
  userEmail: string;
}

function User({ userEmail, username, id }: User) {
  const { mutate, isPending } = useDeleteUser(id);
  function handleDeleteUser() {
    mutate();
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
      <img
        src="https://i.pravatar.cc/"
        alt={username}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{username}</h3>
        <p className="text-gray-600 text-sm">{userEmail}</p>
      </div>
      <button
        className="bg-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        onClick={handleDeleteUser}
        disabled={isPending}
      >
        Ban
      </button>
    </div>
  );
}

export default User;
