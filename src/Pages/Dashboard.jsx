import { AlertTriangle, Bell, CheckCircle, Info, Trash } from "lucide-react"


const Dashboard = () => {
    let headingStyle = "text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200"
  return (
    <div>
      <div className="flex flex-col bg-white rounded-md p-4">
    <h1 className={headingStyle}>
     Importand Updates
    </h1>
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                {/* Notification List */}
                <div className="space-y-4">
                    {/* Single Notification */}
                    <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-md hover:bg-gray-50 transition-all">
                        <div className="flex items-center space-x-4">
                            {/* Notification Icon */}
                            <div className="p-2 bg-cyan-50 rounded-full">
                                <Bell size={20} className="text-cyan-500" />
                            </div>
                            {/* Notification Details */}
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    New issue reported by <span className="text-cyan-500">Mark</span> in <span className="font-semibold">Region A</span>.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    2 hours ago
                                </p>
                            </div>
                        </div>
                        {/* Notification Actions */}
                        <div className="flex items-center space-x-2">
                            <button
                                className="text-cyan-400 hover:text-cyan-500"
                                title="Mark as read"
                            >
                                <CheckCircle size={18} />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                title="Delete"
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Another Notification */}
                    <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-md hover:bg-gray-50 transition-all">
                        <div className="flex items-center space-x-4">
                            {/* Notification Icon */}
                            <div className="p-2 bg-cyan-50 rounded-full">
                                <AlertTriangle size={20} className="text-yellow-500" />
                            </div>
                            {/* Notification Details */}
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    Issue <span className="text-red-500">#123</span> is still pending.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    5 hours ago
                                </p>
                            </div>
                        </div>
                        {/* Notification Actions */}
                        <div className="flex items-center space-x-2">
                            <button
                                className="text-cyan-400 hover:text-cyan-500"
                                title="Mark as read"
                            >
                                <CheckCircle size={18} />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                title="Delete"
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Another Notification */}
                    <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-md hover:bg-gray-50 transition-all">
                        <div className="flex items-center space-x-4">
                            {/* Notification Icon */}
                            <div className="p-2 bg-cyan-50 rounded-full">
                                <Info size={20} className="text-blue-500" />
                            </div>
                            {/* Notification Details */}
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    Issue <span className="text-green-500">#456</span> has been resolved.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    1 day ago
                                </p>
                            </div>
                        </div>
                        {/* Notification Actions */}
                        <div className="flex items-center space-x-2">
                            <button
                                className="text-cyan-400 hover:text-cyan-500"
                                title="Mark as read"
                            >
                                <CheckCircle size={18} />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                title="Delete"
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>
    </div>
  )
}

export default Dashboard
