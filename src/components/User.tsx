interface User {
  username: string;
  userEmail: string;
}

function User({ userEmail, username }: User) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
      <img
        src=""
        alt={username}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{username}</h3>
        <p className="text-gray-600 text-sm">{userEmail}</p>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
        Ban
      </button>
    </div>
  );
}

export default User;
