import React from "react";
import { Link } from "react-router-dom";

interface SidebarItem {
  name: string;
  path: string;
}

function Sidebar() {
  const items: SidebarItem[] = [
    { name: "View public profile", path: "/user/profile" },
    { name: "Profile", path: "/user/editprofile" },
    { name: "Photo", path: "/user/photo" },
    { name: "Account Security", path: "/user/account-security" },
    { name: "Subscriptions", path: "/user/subscriptions" },
    { name: "Payment methods", path: "/user/payment-methods" },
    { name: "Privacy", path: "/user/privacy" },
    { name: "Notifications", path: "/user/notifications" },
    { name: "API clients", path: "/user/api-clients" },
    { name: "Close account", path: "/user/close-account" },
  ];

  return (
    <div className="w-64 bg-gray-100 p-4">
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
              className="block p-2 text-gray-800 rounded hover:bg-gray-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
