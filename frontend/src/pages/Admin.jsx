// src/pages/Admin.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthStatus } from "../store/features/authThunk";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
// import { logout } from "../store/features/authSlice";

const Admin = () => {
    const { isAuthenticated, loading, user, role } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(checkAuthStatus());
    }, [dispatch]);

    useEffect(() => {
        if (!loading) {
            if (!isAuthenticated) {
                navigate("/login");
            } else if (role === "employee") {
                navigate("/employee");
            }
        }
    }, [isAuthenticated, loading, role, navigate]);

    const handleLogout = () => {
        // dispatch(logout());
        navigate("/login");
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar onLogout={handleLogout} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Admin;