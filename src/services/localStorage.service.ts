import configValues from '@/values/config.value'

const { token } = configValues.app

const LocalStorageService = {
    save: (accessToken: string) => {
        globalThis?.localStorage?.setItem(token.accessKey, accessToken)
    },
    get: () => globalThis?.localStorage?.getItem(token.accessKey),
    delete: () => {
        globalThis?.localStorage?.removeItem(token.accessKey)
    },
}

export default LocalStorageService
