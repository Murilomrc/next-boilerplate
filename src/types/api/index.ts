import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IResponse<T = any> {
    res?: AxiosResponse<T> | null
    error?: AxiosResponse | null
}

export type HttpMethod =
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete'
    | 'options'
    | 'head'

export interface ApiBuilderConfig {
    method: HttpMethod
    endpoint: string
    params: any
    body: any
    config: AxiosRequestConfig
    headers: any
}
