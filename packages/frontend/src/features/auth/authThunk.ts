import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";
import { LoginRequest, LoginResponse } from "../../types/types";

export const loginUser = createAsyncThunk<LoginResponse, LoginRequest>(
    'auth/login',
    async(data) => {
        const response = await authApi.login(data)
        return response
    }
)