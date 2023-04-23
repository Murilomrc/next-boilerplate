import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import i18nextConfig from '../../next-i18next.config'

type AppDocumentProps = DocumentProps & {}

export default function Document(props: AppDocumentProps) {
    const currentLocale =
        props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale

    return (
        <Html lang={currentLocale}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
