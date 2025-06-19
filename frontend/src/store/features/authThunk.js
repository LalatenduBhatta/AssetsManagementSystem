import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true; // Needed to send cookies

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password, role }, { rejectWithValue }) => {
        try {
            await axios.post(
                `http://localhost:8000/api/auth/${role}/login`,//api url
                { email, password },
                { withCredentials: true }
            )
            return {
                role
            }
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error || "Login error")
        }
    }
)

export const checkAuthStatus = createAsyncThunk(
    'auth/checkAuthStatus',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:8000/api/auth/me', {
                withCredentials: true,
            });

            return { user: res.data.user, role };
        } catch (err) {
            return rejectWithValue('Not authenticated');
        }
    }
);