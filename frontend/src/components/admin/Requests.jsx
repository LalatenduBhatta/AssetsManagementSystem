// src/components/admin/Requests.jsx
const Requests = () => {
    const requests = [
        {
            id: 1,
            employee: "John Doe",
            asset: "Wireless Headphones",
            date: "2023-06-20",
            status: "Pending",
            reason: "Current headphones are damaged and causing discomfort during long calls"
        },
        {
            id: 2,
            employee: "Jane Smith",
            asset: "Ergonomic Mouse",
            date: "2023-06-18",
            status: "Approved",
            reason: "Developing wrist pain with current mouse, need ergonomic alternative"
        },
    ];

    const statusColors = {
        Pending: "bg-yellow-100 text-yellow-800",
        Approved: "bg-green-100 text-green-800",
        Rejected: "bg-red-100 text-red-800",
    };

    const handleApprove = (id) => {
        console.log(`Approved request ${id}`);
        // Update request status in state/API
    };

    const handleReject = (id) => {
        console.log(`Rejected request ${id}`);
        // Update request status in state/API
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-900 mb-8">Asset Requests</h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Asset</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {requests.map((request) => (
                            <tr key={request.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                    {request.employee}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium">{request.asset}</div>
                                    <div className="text-sm text-gray-500 mt-1">{request.reason}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{request.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[request.status]}`}>
                                        {request.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {request.status === "Pending" && (
                                        <>
                                            <button
                                                onClick={() => handleApprove(request.id)}
                                                className="text-green-600 hover:text-green-900 mr-4"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleReject(request.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}
                                    {request.status !== "Pending" && (
                                        <button className="text-indigo-600 hover:text-indigo-900">
                                            View Details
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Requests;