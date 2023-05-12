import ErrorBoundary from '@/components/ErrorBoundary'
import '@/styles/globals.css'
import '@/styles/template.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    )
}

export default appWithTranslation(App /*, nextI18NextConfig */)
