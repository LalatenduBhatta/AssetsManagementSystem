import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true; // Needed to send cookies

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    ({ email, password, role }, { rejectWithValue }) => {
        try {
            const response = axios.post(
                `http://localhost:8000/api/auth/${role}/login`,//api url
                { email, password },
                { withCredentials: true }
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
)