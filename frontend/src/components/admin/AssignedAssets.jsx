// src/components/admin/AssignedAssets.jsx
const AssignedAssets = () => {
    const assignments = [
        {
            id: 1,
            assetName: "Macbook Pro 16",
            assetId: "A-00123",
            employee: "John Doe",
            employeeId: "E-0456",
            assignedDate: "2023-06-15",
            returnDate: "2025-06-15"
        },
        {
            id: 2,
            assetName: "Dell 4K Monitor",
            assetId: "A-00189",
            employee: "Jane Smith",
            employeeId: "E-0789",
            assignedDate: "2023-05-20",
            returnDate: "2024-05-20"
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-900 mb-8">Assigned Assets</h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Date</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {assignments.map((assignment) => (
                            <tr key={assignment.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{assignment.assetName}</div>
                                    <div className="text-sm text-gray-500">ID: {assignment.assetId}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium">{assignment.employee}</div>
                                    <div className="text-sm text-gray-500">ID: {assignment.employeeId}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{assignment.assignedDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{assignment.returnDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                                        Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900">
                                        Revoke
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Assign New Asset</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Asset</label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Macbook Pro 16</option>
                            <option>Dell 4K Monitor</option>
                            <option>Logitech MX Keys</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Employee</label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>John Doe (E-0456)</option>
                            <option>Jane Smith (E-0789)</option>
                            <option>Robert Brown (E-0321)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Return Date</label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Assign Asset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignedAssets;