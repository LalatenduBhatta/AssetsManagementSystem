import { createSlice } from "@reduxjs/toolkit";
import { loginUser, checkAuthStatus } from "./authThunk";
const initialState = {
    user: null,
    role: null, // 'admin' or 'employee'
    loading: false,
    error: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //sync actions
        resetAuthState: () => {
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //add the async actions
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { role } = action.payload
                state.loading = false;
                state.role = role;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            })
            .addCase(checkAuthStatus.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.role = action.payload.role;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(checkAuthStatus.rejected, (state, action) => {
                state.user = null;
                state.role = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export const { resetAuthState } = authSlice.actions
export default authSlice.reducer