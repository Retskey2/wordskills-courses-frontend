import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from './user.interface';

import { toastr } from 'react-redux-toastr';

import { errorCatch } from '../../api/api.helpers';
import { toastrError } from "@/utills/toastr-error";
import { AuthService } from "@/utills/services/auth/auth.service";


//register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>
('auth/register', async({email, passwordHash, login}, thunkApi) => {
    try {
        const response = await AuthService.register(email,passwordHash, login)
        toastr.success('Registration',  "Completed successfully")
        return response.data
    }
    catch(error) {
        toastrError(error)
        return thunkApi.rejectWithValue(error)
    }
})

//login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>
('auth/login', async({email, passwordHash, login}, thunkApi) => {
    try {
        const response = await AuthService.login(email, passwordHash, login)
        toastr.success('Login',  "Completed successfully")
        return response.data
    }
    catch(error) {
        toastrError(error)
        return thunkApi.rejectWithValue(error)
    }
})


//logout 
export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout()
    }
)


//checkLogin
export const checkAuth = createAsyncThunk<IAuthResponse>
('auth/check-auth', async(_, thunkApi) => {
    try {
        const response = await AuthService.getNewTokens()
        return response.data
    }
    catch(error) {
        if(errorCatch(error) === 'jwt expired'){
            toastr.error(
                'Logout',
                "Your authorization finished, please sign in"
            )
            thunkApi.dispatch(logout())
        }

        toastrError(error)
        return thunkApi.rejectWithValue(error)
    }
})