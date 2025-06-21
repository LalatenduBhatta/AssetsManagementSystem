import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkAuthStatus } from "../store/features/authThunk"
import { useNavigate } from "react-router-dom"

const Employee = () => {
    const { isAuthenticated, loading, user, role } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        //check the auth status if true be here (or) navigate to login
        if (role == "admin") {
            navigate("/admin")
        }
        dispatch(checkAuthStatus())
    }, [])
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login")
        }
    }, [isAuthenticated])
    return (
        <>
            <h1>THIS IS THE ADMIN PAGE</h1>
            <h2>Employee EMAIL:{user?.email}</h2>
        </>
    )
}
export default Employee