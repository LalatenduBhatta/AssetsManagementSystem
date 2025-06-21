// src/components/admin/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
    const menuItems = [
        { path: "/admin", icon: "📊", label: "Dashboard" },
        { path: "/admin/employees", icon: "👨‍💼", label: "Employees" },
        { path: "/admin/assets", icon: "💻", label: "Assets" },
        { path: "/admin/assigned-assets", icon: "📦", label: "Assigned Assets" },
        { path: "/admin/requests", icon: "📨", label: "Requests" },
        { path: "/admin/profile", icon: "👤", label: "Profile" },
    ];

    return (
        <div className="sidebar w-64 bg-gradient-to-b from-blue-800 to-indigo-900 text-white flex flex-col">
            <div className="p-6 text-2xl font-bold">Asset Manager</div>
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center p-3 rounded-lg transition-all ${isActive
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "hover:bg-blue-700"
                                    }`
                                }
                            >
                                <span className="text-xl mr-3">{item.icon}</span>
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-blue-700">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center justify-center p-3 text-red-300 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                >
                    <span className="text-xl mr-3">🚪</span>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;