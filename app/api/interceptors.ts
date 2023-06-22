import axios from 'axios';

import { errorCatch, getContentType } from './api.helpers';
import { removeTokensStorage } from '@/utills/services/auth/auth.helper';
import { AuthService } from '@/utills/services/auth/auth.service';
import Cookies from 'js-cookie';

export const axiosClassic = axios.create({
	baseURL: `${process.env.APP_SERVER_URL}/api`,
	headers: getContentType(),
})

export const instance = axios.create({
    baseURL: `${process.env.APP_SERVER_URL}/api`,
    headers: getContentType(),
})

instance.interceptors.request.use((config)=> {
    const accessToken = Cookies.get('accessToken')

    if(config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})


instance.interceptors.response.use((config)=> config, async error => {
    const originalRequest = error.config
    
    if(error.response.status === 401 ||
    errorCatch(error) === 'jwr expired' ||
    errorCatch(error) === 'jwt must be provided' && 
    error.config &&
    !error.config._isRetry  )  {
        originalRequest._isRetry = true
        try { 
            await AuthService.getNewTokens()
            return instance.request(originalRequest)
        }
        catch(error) {
            if(errorCatch(error) === 'jwt expired') removeTokensStorage()
        }
    }
    throw error
})

export default instance



