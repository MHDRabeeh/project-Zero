import { AlertTriangle, Bell, CheckCircle, Info, Trash, Search, Filter, Plus } from "lucide-react";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const navigate = useNavigate()
    let headingStyle = "text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200";

    return (
        <div>
            <div>
                {/* Hero Section */}
                <div className="bg-cyan-50 p-6 rounded-md mb-6">
                    <h1 className="text-3xl font-bold text-cyan-800 mb-2">Welcome Back, User!</h1>
                    <p className="text-gray-600">{"Here's what's happening with your issues today"}.</p>
                    <div className="mt-4 flex space-x-4">
                        <button onClick={() => navigate("/issue")} className="flex items-center bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors">
                            <Plus size={18} className="mr-2" />
                            Create New Issue
                        </button>
                        <button className="flex items-center bg-white border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-50 transition-colors">
                            <Filter size={18} className="mr-2" />
                            Filter Notifications
                        </button>
                    </div>
                </div>

                {/* Notification Section */}
                <div className="flex flex-col bg-white rounded-md p-4">
                    <h1 className={headingStyle}>
                        Important Updates
                    </h1>

                    {/* Search and Filter Bar */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center bg-gray-50 p-2 rounded-md w-full max-w-md">
                            <Search size={18} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search notifications..."
                                className="bg-transparent outline-none w-full"
                            />
                        </div>
                        <button className="flex items-center bg-cyan-50 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors">
                            <Filter size={18} className="mr-2" />
                            Filter
                        </button>
                    </div>

                    {/* Notification List */}
                    <div className="space-y-4">
                        {/* Single Notification */}
                        <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-md hover:shadow-md transition-all">
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
                        <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-md hover:shadow-md transition-all">
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
                        <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-md hover:shadow-md transition-all">
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

                    {/* Quick Actions */}
                    <div className="mt-6 flex justify-end">
                        <button className="flex items-center bg-cyan-50 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors">
                            <CheckCircle size={18} className="mr-2" />
                            Mark All as Read
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Dashboard;