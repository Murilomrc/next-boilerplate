import '@/styles/globals.css'
import '@/styles/template.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default appWithTranslation(App /*, nextI18NextConfig */)
