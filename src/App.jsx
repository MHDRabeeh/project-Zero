
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6"> {/* Main content area */} </div>
      </div>
    </div>
  );
}


export default App

