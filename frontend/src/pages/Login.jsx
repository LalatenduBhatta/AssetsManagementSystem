import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        role: 'employee'
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (credentials.role == "admin") {
            //admin login api
            axios.post("http://localhost:8000/api/auth/admin/login", credentials)
                .then((data) => console.log(data))
                .catch((error) => console.log(error))
        } else {
            //employee login api
            axios.post("http://localhost:8000/api/auth/employee/login", credentials)
                .then((data) => console.log(data))
                .catch((error) => console.log(error))
        }
    }

    const handleInputChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Asset Management System
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign in to your account
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={credentials.role}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="employee">Employee</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={credentials.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={credentials.password}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm text-center">{error}</div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login