import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import SecureLS from 'secure-ls'

import { axiosConfig } from '@/configs/axios.config'

export interface IResponse<T = any> {
    res?: AxiosResponse<T> | null
    error?: AxiosResponse | null
}

const secureLS = new SecureLS()
const api = axios.create(axiosConfig)

api.interceptors.request.use(
    (config: any) => {
        if (config.headers) {
            const user = secureLS.get('')
            const { token } = user
            if (token && !config.headers.Authorization)
                config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error: any) => {
        /* if (appConfig.env === 'development' || appConfig.env === 'test')
            LogUtils.error('Erro de requisição') */
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const { response } = error

        /* if (appConfig.env === 'development' || appConfig.env === 'test') {
            LogUtils.error(error.response || error, 'API')
        } */

        return Promise.reject(error)
    }
)

export const apiRequest = async <T>(
    config: AxiosRequestConfig,
    isThrow: boolean = false
): Promise<IResponse<T>> => {
    try {
        const res = await api(config)
        return { res, error: null }
    } catch (e) {
        if (isThrow) throw e
        const error = e as AxiosError
        return { res: null, error: error.response }
    }
}

api.prototype.req = apiRequest

export default api
