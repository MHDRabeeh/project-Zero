import { Bell} from "lucide-react";
import { useLocation } from "react-router-dom";
const Topbar = () => {
  const location = useLocation();
  return (
    <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      {/* Left - Empty for balance */}
      <div className="text-gray-600">{location.pathname}</div>

      {/* Right - Notification & Profile */}
      <div className="flex items-center space-x-6  ">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <div className="p-2 rounded-full hover:bg-gray-100 transition duration-300">
            <Bell className="w-5 h-5 text-gray-600 hover:text-cyan-500 transition duration-300" />
          </div>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 ">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 cursor-pointer border-gray-200 hover:border-cyan-400 transition duration-300"
          />
          <div className="flex items-center space-x-1 ">
            <span className="text-sm text-gray-700">
              Hi, <span className="font-semibold text-gray-900">Michael</span>
            </span>
            <div className="w-4 h-4 text-gray-500 hover:text-cyan-500 transition duration-300 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;