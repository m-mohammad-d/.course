import { Outlet } from "react-router-dom";

function TeacherLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Teacher Panel</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                My Courses
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Add New Course
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Teacher Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              Notifications
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              Profile
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TeacherLayout;
