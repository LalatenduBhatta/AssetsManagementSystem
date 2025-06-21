// src/components/admin/Dashboard.jsx
const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-900 mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard
                    title="Total Employees"
                    value="42"
                    icon="👨‍💼"
                    color="bg-blue-500"
                />
                <DashboardCard
                    title="Total Assets"
                    value="128"
                    icon="💻"
                    color="bg-green-500"
                />
                <DashboardCard
                    title="Assigned Assets"
                    value="98"
                    icon="📦"
                    color="bg-yellow-500"
                />
                <DashboardCard
                    title="Pending Requests"
                    value="12"
                    icon="📨"
                    color="bg-red-500"
                />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                <ul className="space-y-3">
                    <ActivityItem
                        action="Assigned Macbook Pro to John Doe"
                        time="2 hours ago"
                    />
                    <ActivityItem
                        action="Added 10 new monitors to inventory"
                        time="Yesterday"
                    />
                    <ActivityItem
                        action="Approved Sarah's headphone request"
                        time="2 days ago"
                    />
                </ul>
            </div>
        </div>
    );
};

const DashboardCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`p-4 ${color} text-white`}>
            <div className="text-4xl">{icon}</div>
        </div>
        <div className="p-5">
            <h3 className="text-gray-500">{title}</h3>
            <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
    </div>
);

const ActivityItem = ({ action, time }) => (
    <li className="flex items-start border-b pb-3 last:border-0 last:pb-0">
        <div className="bg-blue-100 rounded-full p-2 mr-3">🔔</div>
        <div>
            <p className="font-medium">{action}</p>
            <p className="text-sm text-gray-500">{time}</p>
        </div>
    </li>
);

export default Dashboard;