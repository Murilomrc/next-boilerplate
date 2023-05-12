import { useEffect, useState } from 'react'

export default function useDeviceType() {
    const [deviceType, setDeviceType] = useState<string | undefined>(undefined)
    const [browserName, setBrowserName] = useState<string | undefined>(
        undefined
    )

    const userAgent = navigator.userAgent
    const language = navigator.language
    const platform = navigator.platform
    const isDesktop = deviceType === 'Desktop'
    const isMobile = deviceType === 'Mobile'

    useEffect(() => {
        const device = detectDeviceType()
        const browser = detectBrowserName()
        setDeviceType(device)
        setBrowserName(browser)
    }, [])

    const detectDeviceType = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
            navigator.userAgent
        )
            ? 'Mobile'
            : 'Desktop'

    const detectBrowserName = () => {
        const browsers = {
            chrome: /chrome/i,
            safari: /safari/i,
            firefox: /firefox/i,
            ie: /internet explorer/i,
            edge: /edge/i,
            opera: /opera|opr/i,
            yandex: /yandex/i,
            uc: /ucbrowser/i,
            samsung: /samsungbrowser/i,
            maxthon: /maxthon/i,
            phantomjs: /phantomjs/i,
            crios: /crios/i,
            firefoxios: /fxios/i,
            edgios: /edgios/i,
            safariios: /safariios/i,
            android: /android/i,
            ios: /(iphone|ipad|ipod)/i,
            unknown: /unknown/i,
        }
        for (const key in browsers) {
            if (browsers[key as keyof typeof browsers].test(userAgent))
                return key
        }
        return 'unknown'
    }

    return {
        deviceType,
        browserName,
        isDesktop,
        isMobile,
        userAgent,
        platform,
        language,
    }
}
