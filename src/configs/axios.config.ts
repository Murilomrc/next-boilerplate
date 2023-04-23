import { AxiosRequestConfig } from 'axios'

import { apiValues } from '@/values/config.value'

export const axiosConfig: AxiosRequestConfig<any> = {
    baseURL: apiValues.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: apiValues.timeout,
}
