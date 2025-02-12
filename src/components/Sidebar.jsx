import { useEffect, useState } from "react";
import { Home, Users, Folder, Search, Activity, ActivityIcon, ListTodo } from "lucide-react";
import NavItem from "./NavItem";
import { useNavigate } from "react-router";

const Sidebar = () => {
  // State to track active menu item
  const [activeItem, setActiveItem] = useState("/");
  const navigate = useNavigate()

  useEffect(()=>{
    navigate(activeItem)
  },[activeItem])

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-100 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center space-x-2 px-2 mb-8">
        <span className="text-2xl font-bold text-cyan-500">🌊</span>
        <span className="text-xl font-semibold text-gray-800">Flow finity</span>
        
      </div>
   
      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        <NavItem icon={Home} label="Dashboard" active={activeItem === "/"} onClick={() => setActiveItem("/")} />
        <NavItem icon={Users} label="Issue" active={activeItem === "/issue"} onClick={() => setActiveItem("/issue")} />
        <NavItem icon={Folder} label="Issue Log" active={activeItem === "/issue-log"} onClick={() => setActiveItem("/issue-log")} />
        <NavItem icon={Activity} label="Activity" active={activeItem === "/activity"} onClick={() => setActiveItem("/activity")} />
        <NavItem icon={ActivityIcon} label="Activity Log" active={activeItem === "/activity-log"} onClick={() => setActiveItem("/activity-log")} />
        <NavItem icon={ListTodo} label="My Todo" active={activeItem === "/my-todo"} onClick={() => setActiveItem("/my-todo")} />
        <NavItem icon={Search} label="SAL Search" active={activeItem === "/sla-search"} onClick={() => setActiveItem("/sla-search")} />
      </nav>

      {/* Optional: User Profile or Footer */}
      <div className="mt-8 border-t border-gray-100 pt-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">MC</span>
          </div>
          <div>
            {/* <p className="text-sm font-medium text-gray-800">John Doe</p> */}
            <p className="text-xs text-gray-500">Admin</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};




export default Sidebar;
