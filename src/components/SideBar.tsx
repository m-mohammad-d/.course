import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

interface SidebarItem {
  name: string;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

function Sidebar({ items }: SidebarProps) {
  const { logout } = useLogout();
  function handlerLogout() {
    logout();
  }
  return (
    <div className="w-full md:w-64 bg-gray-100 p-4 border-gray-300 border rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white text-2xl">
          M
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold">Mohammad</div>
        </div>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <Link
              to={item.path}
              className="block p-2 text-gray-800 rounded hover:bg-gray-200 transition duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <button
          className="block p-2 text-gray-800 rounded hover:bg-gray-200 transition duration-200"
          onClick={handlerLogout}
        >
          Log Out
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
