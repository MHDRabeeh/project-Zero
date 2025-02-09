// import { Pencil } from 'lucide-react';

const Issue = () => {
    return (
        <>
            <div className="flex flex-col bg-white rounded-md">
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
            </div>
        </>
    )
}

export default Issue
