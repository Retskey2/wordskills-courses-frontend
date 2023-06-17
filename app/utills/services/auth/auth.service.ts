
import { saveToStorage, removeTokensStorage } from './auth.helper';
import Cookies from 'js-cookie';
import { getContentType } from '@/api/api.helpers';
import { axiosClassic } from '@/api/interceptors';
import { IAuthResponse } from '@/store/user/user.interface';
import { getAuthUrl } from '@/config/api.config';

export const AuthService = {
    async register(email: string, passwordHash: string, login: string) {
        const response = await axiosClassic.post<IAuthResponse>(
            getAuthUrl('/register'), 
            {email, login, passwordHash}
        )

        if(response.data.accessToken) 
            saveToStorage(response.data)

        return response
    },

    async login(email: string, passwordHash: string, login: string) {
        const response = await axiosClassic.post<IAuthResponse>(
            getAuthUrl('login'), 
            {email, login, passwordHash}
        )

        if(response.data.accessToken) 
            saveToStorage(response.data)

        return response
    },

    logout() {
        removeTokensStorage()
        localStorage.removeItem('user')
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')
        const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('login/access-token'), {refreshToken}, {headers: getContentType()})
        
        if(response.data.accessToken) saveToStorage(response.data)

        return response
    },
}