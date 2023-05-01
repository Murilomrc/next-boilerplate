import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import SecureLS from 'secure-ls'

import { appConfig, axiosConfig } from '@/configs'
import { ApiBuilderConfig, HttpMethod } from '@/types/api'
import { LogUtils } from '@/commons/utils/log.util'

export interface IResponse<T = any> {
    res?: AxiosResponse<T> | null
    error?: AxiosResponse | null
}

//const secureLS = new SecureLS()
const api = axios.create(axiosConfig)

api.interceptors.request.use(
    (config: any) => {
        /* if (config.headers) {
            const user = secureLS.get('')
            const { token } = user
            if (token && !config.headers.Authorization)
                config.headers.Authorization = `Bearer ${token}`
        } */
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

        if (appConfig.env === 'development' || appConfig.env === 'test') {
            LogUtils.error(error.response || error, 'API')
        }

        return Promise.reject(error)
    }
)

export const apiBuilder = function (endpoint: string = '') {
    const apiConfig: ApiBuilderConfig = {
        method: 'get',
        endpoint,
        params: null,
        body: null,
        config: {},
        headers: {},
    }

    const mutateMethods = ['post', 'patch', 'put']

    const configMethod = (method: HttpMethod, endpoint?: string) => {
        apiConfig.method = method
        if (endpoint) apiConfig.endpoint = endpoint
        return builders
    }

    const builders = {
        get: (endpoint?: string) => configMethod('get', endpoint),
        post: (endpoint?: string) => configMethod('post', endpoint),
        patch: (endpoint?: string) => configMethod('patch', endpoint),
        put: (endpoint?: string) => configMethod('put', endpoint),
        delete: (endpoint?: string) => configMethod('delete', endpoint),
        options: (endpoint?: string) => configMethod('options', endpoint),
        head: (endpoint?: string) => configMethod('head', endpoint),
        params: (params: object) => {
            apiConfig.params = params
            return builders
        },
        body: (body: object) => {
            apiConfig.body = body
            return builders
        },
        config: (config: any) => {
            apiConfig.config = config
            return builders
        },
        headers: (headers: any) => {
            apiConfig.headers = headers
            return builders
        },
        build: async <T>(): Promise<IResponse<T>> => {
            const isMutateMethod = mutateMethods.includes(apiConfig.method)
            const configBuilder: AxiosRequestConfig = {
                ...apiConfig.config,
                headers: apiConfig.headers || apiConfig.config.headers,
                params: apiConfig.params || apiConfig.config.params,
            }
            try {
                const res = isMutateMethod
                    ? await api[apiConfig.method](
                          apiConfig.endpoint,
                          apiConfig.body,
                          configBuilder
                      )
                    : await api[apiConfig.method](
                          apiConfig.endpoint,
                          configBuilder
                      )
                return { res, error: null }
            } catch (e) {
                const error = e as AxiosError
                return { res: null, error: error.response }
            }
        },
    }
    return builders
}

export default api
