import configValues from '@/values/config.value'

const { token } = configValues.app

const SessionStorageService = {
    save: (accessToken: string) => {
        globalThis?.sessionStorage?.setItem(token.accessKey, accessToken)
    },
    get: () => globalThis?.sessionStorage?.getItem(token.accessKey),
    delete: () => {
        globalThis?.sessionStorage?.removeItem(token.accessKey)
    },
}

export default SessionStorageService
