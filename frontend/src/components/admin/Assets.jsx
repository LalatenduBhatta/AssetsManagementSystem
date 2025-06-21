// src/components/admin/Assets.jsx
import { useState } from "react";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";

const Assets = () => {
    const [assets, setAssets] = useState([
        { id: 1, name: "Macbook Pro", category: "Laptop", status: "Available", serial: "MBP2023-001" },
        { id: 2, name: "Dell Monitor", category: "Monitor", status: "Assigned", serial: "DEL-U2419-045" },
        { id: 3, name: "Logitech MX Keys", category: "Keyboard", status: "Available", serial: "LOG-MXK-112" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAsset, setCurrentAsset] = useState(null);

    const statusColors = {
        Available: "bg-green-100 text-green-800",
        Assigned: "bg-blue-100 text-blue-800",
        Maintenance: "bg-yellow-100 text-yellow-800",
        Retired: "bg-gray-100 text-gray-800",
    };

    const handleDelete = (id) => {
        setAssets(assets.filter(asset => asset.id !== id));
    };

    const handleEdit = (asset) => {
        setCurrentAsset(asset);
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would dispatch an action to update state/API
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-indigo-900">Manage Assets</h1>
                <button
                    onClick={() => { setCurrentAsset(null); setIsModalOpen(true); }}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
                >
                    <PlusIcon className="h-5 w-5 mr-1" />
                    Add Asset
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial Number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {assets.map((asset) => (
                            <tr key={asset.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">{asset.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{asset.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{asset.serial}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[asset.status]}`}>
                                        {asset.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(asset)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(asset.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">
                                {currentAsset ? "Edit Asset" : "Add New Asset"}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Asset Name</label>
                                    <input
                                        type="text"
                                        defaultValue={currentAsset?.name || ""}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                                    <select
                                        defaultValue={currentAsset?.category || "Laptop"}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    >
                                        <option value="Laptop">Laptop</option>
                                        <option value="Monitor">Monitor</option>
                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Mouse">Mouse</option>
                                        <option value="Phone">Phone</option>
                                        <option value="Tablet">Tablet</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Serial Number</label>
                                    <input
                                        type="text"
                                        defaultValue={currentAsset?.serial || ""}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                    >
                                        {currentAsset ? "Update" : "Create"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Assets;