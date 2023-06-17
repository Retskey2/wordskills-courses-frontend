
import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from './user.interface';
import { login, logout, register, checkAuth } from './user.actions';
import { getStoreLocal } from "@/utills/local-storage";

const initialState: IInitialState = {
    isLoading: false,
    user: getStoreLocal('user')
}

export const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, state => {
            state.isLoading = true; 
        })
        .addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user
        })
        .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.user = null
        })

        .addCase(login.pending, state => {
            state.isLoading = true; 
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.user = null
        })

        .addCase(logout.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = null
        })
        .addCase(checkAuth.fulfilled, (state, {payload}) => {
            state.user = payload.user
        })
    }
})

export const {reducer} = userSlice