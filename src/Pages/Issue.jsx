// import { Pencil } from 'lucide-react';

const Issue = () => {
    return (
        <>
            <div className="flex flex-col bg-white rounded-md p-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                                <thead className="border-b border-neutral-200 font-medium">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4"> Client</th>
                                        <th scope="col" className="px-6 py-4">Region</th>
                                        <th scope="col" className="px-6 py-4">Issue Classification</th>
                                        <th scope="col" className="px-6 py-4"> Issue Details </th>

                                        <th scope="col" className="px-6 py-4">Shift Handeled by</th>
                                        <th scope="col" className="px-6 py-4"> Issue Assigned To</th>
                                        <th scope="col" className="px-6 py-4"> Status</th>
                                        <th scope="col" className="px-6 py-4"> Actions  </th>
                                        <th scope="col" className="px-6 py-4"> Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-200">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-red-500">Pending</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-green-500">Completed</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-red-500">Pending</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center px-1.5 justify-end">
                    <div className="flex space-x-1">
                        {/* <!-- Previous Button --> */}
                        <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Prev
                        </button>

                        {/* <!-- Page Buttons --> */}
                        <button className="min-w-9 rounded-md bg-cyan-50 py-2 px-3 border border-transparent text-center text-sm text-cyan-700 font-semibold transition-all shadow-md hover:shadow-lg focus:bg-cyan-100 focus:shadow-none active:bg-cyan-100 hover:bg-cyan-100 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            1
                        </button>
                        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            2
                        </button>
                        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            3
                        </button>

                        {/* <!-- Next Button --> */}
                        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 active:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Issue
