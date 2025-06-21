import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkAuthStatus } from "../store/features/authThunk"
import { useNavigate } from "react-router-dom"

function Home() {
    const { isAuthenticated, role, error } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(checkAuthStatus())
    }, [])
    useEffect(() => {
        if (isAuthenticated) {
            navigate(`/${role}`)
        }
        if (error) {
            navigate("/login")
        }
    }, [isAuthenticated, error])
}
export default Home