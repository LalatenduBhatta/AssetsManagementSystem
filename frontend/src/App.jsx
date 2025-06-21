import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Employee from "./pages/Employee"
import Admin from "./pages/Admin"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Dashboard from "./components/admin/Dashboard"
import Employees from "./components/admin/Employees"
import Assets from "./components/admin/Assets"
import AssignedAssets from "./components/admin/AssignedAssets"
import Requests from "./components/admin/Requests"
import Profile from "./components/admin/Profile"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="assets" element={<Assets />} />
          <Route path="assigned-assets" element={<AssignedAssets />} />
          <Route path="requests" element={<Requests />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
export default App