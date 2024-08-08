import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

function UserLayout() {
  return (
    <div className="flex justify-center my-12">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3">
        <Sidebar />
        <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
