import configValues from '@/values/config.value'

import CookieService from './cookie.service'
import LocalStorageService from './localStorage.service'
import SessionStorageService from './sessionStorage.service'

const { store } = configValues.app

const tokenServiceOperation = {
    localStorage: {
        save: (accessToken: string) => LocalStorageService.save(accessToken),
        get: () => LocalStorageService.get(),
        delete: () => LocalStorageService.delete(),
    },
    session: {
        save: (accessToken: string) => SessionStorageService.save(accessToken),
        get: () => SessionStorageService.get(),
        delete: () => SessionStorageService.delete(),
    },
    cookie: {
        save: (accessToken: string, ctx = null) =>
            CookieService.save(accessToken, ctx),
        get: (ctx = null) => CookieService.get(ctx),
        delete: (ctx = null) => CookieService.delete(ctx),
    },
}

type TokenServiceOperationKey = keyof typeof tokenServiceOperation

const TokenService = {
    save(accessToken: string, ctx = null) {
        tokenServiceOperation[store.type as TokenServiceOperationKey].save(
            accessToken,
            ctx
        )
    },
    get(ctx = null) {
        tokenServiceOperation[store.type as TokenServiceOperationKey].get(ctx)
    },
    delete(ctx = null) {
        tokenServiceOperation[store.type as TokenServiceOperationKey].delete(
            ctx
        )
    },
}

export default TokenService
