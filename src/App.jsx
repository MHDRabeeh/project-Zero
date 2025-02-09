
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar";
import Issue from "./Pages/Issue";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6  overflow-scroll"> 
          <Issue/>
          </div>
      </div>
    </div>
  );
}


export default App

