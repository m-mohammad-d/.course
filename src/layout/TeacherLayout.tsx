import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

function TeacherLayout() {
  return (
    <div className="flex justify-center my-12 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 md:ml-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeacherLayout;
