import { FaUsers, FaBook } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-orange text-white fixed top-0 left-0 h-full">
        <div className="p-4 text-center border-b border-orange-700">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin/manage-users"
            className="flex items-center p-4 hover:bg-orange-700 transition-colors duration-300"
          >
            <FaUsers className="mr-2" /> manage User
          </Link>
          <Link
            to="/admin/manage-courses"
            className="flex items-center p-4 hover:bg-orange-700 transition-colors duration-300"
          >
            <FaBook className="mr-2" /> Users
          </Link>
          <Link
            to="/admin/reports"
            className="flex items-center p-4 hover:bg-orange-700 transition-colors duration-300"
          >
            <MdReport className="mr-2" /> reports
          </Link>
          <Link
            to="/admin/teacher-requests"
            className="flex items-center p-4 hover:bg-orange-700 transition-colors duration-300"
          >
            <PiChalkboardTeacherFill className="mr-2" /> teacher Request
          </Link>
        </nav>
      </aside>
      <div className="flex-1 ml-64 flex flex-col justify-center items-center">
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
