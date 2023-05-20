import { apiValues } from '@/values/config.value'
import type { AxiosRequestConfig } from 'axios'

export const axiosConfig: AxiosRequestConfig<any> = {
    baseURL: apiValues.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: apiValues.timeout,
}
