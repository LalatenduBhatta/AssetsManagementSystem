// src/components/admin/Profile.jsx
const Profile = () => {
    const adminData = {
        name: "Admin User",
        email: "admin@company.com",
        role: "Administrator",
        joinDate: "2020-01-15",
        lastLogin: "2023-06-20 14:30:22"
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-900 mb-8">Admin Profile</h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                    <div className="flex items-center">
                        <div className="bg-indigo-100 text-indigo-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                            AU
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold">{adminData.name}</h2>
                            <p className="text-gray-600">{adminData.email}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Role</span>
                                    <span className="font-medium">{adminData.role}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Join Date</span>
                                    <span className="font-medium">{adminData.joinDate}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Last Login</span>
                                    <span className="font-medium">{adminData.lastLogin}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Security</h3>
                            <div className="space-y-4">
                                <button className="w-full bg-white border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
                                    Change Password
                                </button>
                                <button className="w-full bg-white border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
                                    Two-Factor Authentication
                                </button>
                                <button className="w-full bg-white border border-red-600 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors">
                                    Logout All Devices
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Update Profile Information</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            defaultValue={adminData.name}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input
                            type="email"
                            defaultValue={adminData.email}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;