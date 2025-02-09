import { useState } from "react";
import { Home, Users, Folder, Calendar, FileText, PieChart } from "lucide-react";
import NavItem from "./NavItem";

const Sidebar = () => {
  // State to track active menu item
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-100 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center space-x-2 px-2 mb-8">
        <span className="text-2xl font-bold text-cyan-500">🌊</span>
        <span className="text-xl font-semibold text-gray-800">Flow finity</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        <NavItem icon={Home} label="Dashboard" active={activeItem === "Dashboard"} onClick={() => setActiveItem("Dashboard")} />
        <NavItem icon={Users} label="Issue" active={activeItem === "Issue"} onClick={() => setActiveItem("Issue")} />
        <NavItem icon={Folder} label="Issue Log" active={activeItem === "Issue Log"} onClick={() => setActiveItem("Issue Log")} />
        <NavItem icon={Calendar} label="Calendar" active={activeItem === "Calendar"} onClick={() => setActiveItem("Calendar")} />
        <NavItem icon={FileText} label="Documents" active={activeItem === "Documents"} onClick={() => setActiveItem("Documents")} />
        <NavItem icon={PieChart} label="Reports" active={activeItem === "Reports"} onClick={() => setActiveItem("Reports")} />
      </nav>

      {/* Optional: User Profile or Footer */}
      <div className="mt-8 border-t border-gray-100 pt-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};




export default Sidebar;
