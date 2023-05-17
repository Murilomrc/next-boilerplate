import configValues from '@/values/config.value'
import nookies from 'nookies'

const { token, cookie } = configValues.app

const CookieService = {
    save: (accessToken: string, ctx = null) => {
        nookies.set(ctx, token.accessKey, accessToken, cookie.config)
    },
    get: (ctx = null) => {
        const cookies = nookies.get(ctx)
        return cookies[token.accessKey] || ''
    },
    delete: (ctx = null) => {
        nookies.destroy(ctx, token.accessKey)
    },
}

export default CookieService
