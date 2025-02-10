import { Eye, Trash } from "lucide-react"


const IssueLog = () => {
    let headingStyle = "text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200"
    return (
        <div>
            <div className="flex flex-col bg-white rounded-md p-4">
                <h1 className={headingStyle}>
                    Logs
                </h1>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            {/* Log List */}
                            <div className="space-y-4">
                                {/* Single Log Entry */}
                                <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-md hover:bg-gray-50 transition-all">
                                    {/* Log Details */}
                                    <div className="flex flex-col space-y-2">
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="text-cyan-500">Issue #1</span> was created by <span className="font-semibold">Mark</span>.
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Client: <span className="font-medium">Otto</span> | Region: <span className="font-medium">Region A</span>
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Classification: <span className="font-medium">@mdo</span> | Details: <span className="font-medium">Issue details here</span>
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Assigned to: <span className="font-medium">John Doe</span> | Status: <span className="text-red-500 font-medium">Pending</span>
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            2 hours ago
                                        </p>
                                    </div>
                                    {/* Log Actions */}
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="text-cyan-400 hover:text-cyan-500"
                                            title="View Details"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            title="Delete Log"
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Another Log Entry */}
                                <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-md hover:bg-gray-50 transition-all">
                                    {/* Log Details */}
                                    <div className="flex flex-col space-y-2">
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="text-cyan-500">Issue #1</span> was updated by <span className="font-semibold">Jane Doe</span>.
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Status changed from <span className="text-red-500 font-medium">Pending</span> to <span className="text-green-500 font-medium">Resolved</span>.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            5 hours ago
                                        </p>
                                    </div>
                                    {/* Log Actions */}
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="text-cyan-400 hover:text-cyan-500"
                                            title="View Details"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            title="Delete Log"
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Another Log Entry */}
                                <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-md hover:bg-gray-50 transition-all">
                                    {/* Log Details */}
                                    <div className="flex flex-col space-y-2">
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="text-cyan-500">Issue #2</span> was assigned to <span className="font-semibold">John Doe</span>.
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Shift handled by: <span className="font-medium">Mark</span> | Region: <span className="font-medium">Region B</span>
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            1 day ago
                                        </p>
                                    </div>
                                    {/* Log Actions */}
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="text-cyan-400 hover:text-cyan-500"
                                            title="View Details"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            title="Delete Log"
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination (Same as your table) */}
                <div className="w-full flex items-center px-1.5 justify-end mt-4">
                    <div className="flex space-x-1">
                        {/* Previous Button */}
                        <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Prev
                        </button>

                        {/* Page Buttons */}
                        <button className="min-w-9 rounded-md bg-cyan-50 py-2 px-3 border border-transparent text-center text-sm text-cyan-700 font-semibold transition-all shadow-md hover:shadow-lg focus:bg-cyan-100 focus:shadow-none active:bg-cyan-100 hover:bg-cyan-100 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            1
                        </button>
                        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            2
                        </button>
                        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            3
                        </button>

                        {/* Next Button */}
                        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IssueLog
