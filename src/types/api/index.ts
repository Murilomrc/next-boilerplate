import { AxiosRequestConfig } from 'axios'

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
