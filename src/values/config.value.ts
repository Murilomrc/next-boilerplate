import { ONE_YEAR } from './constant.value'

export const commonValues = {
    lang: process.env.NEXT_PUBLIC_LANG || 'pt-BR',
}

export const appValues = {
    name: process.env.NEXT_PUBLIC_APP_NAME,
    lang: process.env.NEXT_PUBLIC_LANG || 'pt-BR',
    env: process.env.NEXT_PUBLIC_ENV || 'development',
    isDevelopment: process.env.NEXT_PUBLIC_ENV === 'development',
    localStorageKey: process.env.NEXT_PUBLIC_LS_KEY,
    token: {
        local: process.env.NEXT_PUBLIC_TOKEN_LOCAL,
        accessKey: 'teste',
    },
    store: {
        type: process.env.NEXT_PUBLIC_STORE_TYPE || 'cookie',
    },
    cookie: {
        config: {
            maxAge: ONE_YEAR,
            path: '/',
        },
    },
}

export const apiValues = {
    baseUrl: 'https://httpbin.org',
    timeout: process.env.NEXT_PUBLIC_API_TIMEOUT || 10000,
}

export const configValues = {
    common: commonValues,
    app: appValues,
    api: apiValues,
}

export default configValues
