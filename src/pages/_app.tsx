import '@/styles/globals.css'
import '@/styles/template.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import ErrorBoundary from '@/components/ErrorBoundary'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    )
}

export default appWithTranslation(App /*, nextI18NextConfig */)
