import { FaUsers, FaBook } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import the hamburger menu icon
import { useLogout } from "../hooks/useLogout";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useLogout();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-backgroundGray text-gray-800">
      <aside
        className={`fixed top-0 left-0 z-20 h-full bg-darkGray text-softWhite transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 lg:translate-x-0 lg:w-64 shadow-lg`}
      >
        <div className="p-4 text-center border-b border-primary relative">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
          <button
            className="lg:hidden absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6 text-softWhite"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isSidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin/manage-users"
            className="flex items-center p-4 hover:bg-darkBlue hover:text-softWhite transition-colors"
          >
            <FaUsers className="mr-2 text-lg" /> Manage Users
          </Link>
          <Link
            to="/admin/manage-courses"
            className="flex items-center p-4 hover:bg-darkBlue hover:text-softWhite transition-colors"
          >
            <FaBook className="mr-2 text-lg" /> Manage Courses
          </Link>
          <Link
            to="/admin/reports"
            className="flex items-center p-4 hover:bg-darkBlue hover:text-softWhite transition-colors"
          >
            <MdReport className="mr-2 text-lg" /> Reports
          </Link>
          <Link
            to="/admin/teacher-requests"
            className="flex items-center p-4 hover:bg-darkBlue hover:text-softWhite transition-colors"
          >
            <PiChalkboardTeacherFill className="mr-2 text-lg" /> Teacher
            Requests
          </Link>
        </nav>
      </aside>

      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "lg:ml-64"
        }`}
      >
        <header className="bg-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden block text-gray-800"
              onClick={toggleSidebar}
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              onClick={() => logout()}
            >
              Logout
            </button>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/30"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2">Admin Name</span>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 bg-backgroundGray">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
