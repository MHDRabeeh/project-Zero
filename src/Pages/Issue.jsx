// import { Pencil } from 'lucide-react';

import { Edit, MessageSquareDiff, MessageSquareShare, Trash } from "lucide-react"
import { useRef, useState } from "react";

const Issue = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    let headingStyle = "text-2xl font-semibold rounded-t-md pl-3 bg-cyan-50 text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2 hover:bg-cyan-100 hover:text-cyan-800 transition-colors duration-200"

    return (
        <>  <div className="flex flex-col gap-7">
            <div className="flex flex-col bg-white rounded-md p-2">
                <h1 className={headingStyle}>
                    Pending Issues
                </h1>
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
                                        <td className="whitespace-nowrap px-6 py-4 text-red-500 font-[500] hover:text-red-600">Pending</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                onClick={toggleDrawer}

                                                className="text-cyan-400 hover:text-cyan-500 mr-2"
                                            >
                                                <Edit size={20} />
                                            </button>
                                            <button

                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash size={18} />
                                            </button>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center "> <button className="text-cyan-400 hover:text-cyan-500"  title="Add comments"><MessageSquareDiff size={22} /></button></td>
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
                <div>


                    <div
                        id="drawer-right-example"
                        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform w-[30%] bg-white/90 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        tabIndex="-1"
                        aria-labelledby="drawer-right-label"
                        ref={drawerRef} // Add ref for focus management
                    >
                        <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500">
                            <svg
                                className="w-4 h-4 me-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            Editing  Issue
                        </h5>
                        <button
                            type="button"
                            onClick={toggleDrawer}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
                            aria-label="Close menu" // Add aria-label for accessibility
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>

                        </button>


                    </div>
                </div>

            </div>

            {/* resolved issues */}

            <div className="flex flex-col bg-white rounded-md p-2">
                <h1 className="text-2xl  pl-3  font-semibold bg-green-50 text-green-700 mb-6 border-b-2 border-green-200 pb-2 hover:bg-green-100 hover:text-green-800 transition-colors duration-200">
                    Resolved Issues
                </h1>
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
                                        <td className="whitespace-nowrap px-6 py-4 text-green-500 font-[500] hover:text-green-600">Completed</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                onClick={toggleDrawer}

                                                className="text-cyan-400 hover:text-cyan-500 mr-2"
                                            >
                                                <Edit size={20} />
                                            </button>
                                            <button

                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash size={18} />
                                            </button>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center "> <button   className="text-cyan-400  hover:text-cyan-500" title="View all  comments"><MessageSquareShare size={22} /></button></td>
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
        </div>

        </>
    )
}

export default Issue
