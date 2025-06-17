import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";
const initialState = {
    user: null,
    role: null, // 'admin' or 'user'
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

            })
            .addCase(loginUser.fulfilled, (state, action) => {

            })
            .addCase(loginUser.rejected, (state, action) => {

            })
    }
})
export const { resetAuthState } = authSlice.actions
export default authSlice.reducer