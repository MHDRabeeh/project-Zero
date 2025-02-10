
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar";
import Dashboard from "./Pages/Dashboard";
import Issue from "./Pages/Issue";
import { Route,Routes } from "react-router";
import IssueLog from "./Pages/IssueLog";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6  overflow-auto"> 
          <Routes>
            <Route path="/issue" element={<Issue/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/issue-log" element={<IssueLog/>}/>
          </Routes>


          {/* <Issue/> */}
          </div>
      </div>
    </div>
  );
}


export default App

