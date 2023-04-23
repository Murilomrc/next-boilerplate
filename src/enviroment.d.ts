declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_ENV: string
            NEXT_PUBLIC_APP_NAME: string
            NEXT_PUBLIC_LANG: string
            NEXT_PUBLIC_LS_KEY: string
            NEXT_PUBLIC_TOKEN_LOCAL: string
            NEXT_PUBLIC_LS_KEY: string
            NEXT_PUBLIC_API_BASE_URL: string
            NEXT_PUBLIC_API_TIMEOUT: number
        }
    }
}
export {}
