import { useEffect } from 'react'

interface UseBackPageEventProps {
    message: string
    destinationRoute: string | number
    enabled?: boolean
}

export default function useBackPageEvent(
    message: string,
    destinationRoute: string | number,
    enabled: boolean = true
) {
    useEffect(() => {
        if (enabled) {
            window.history.pushState(null, '', window.location.pathname)
            window.addEventListener('popstate', onBackButtonEvent)
            return () =>
                window.removeEventListener('popstate', onBackButtonEvent)
        }
    }, [enabled])

    const onBackButtonEvent = (event: PopStateEvent) => {
        event.preventDefault()
        if (window.confirm(message)) {
            window.history.pushState(
                null,
                '',
                `${window.location.origin}${destinationRoute}`
            )
            // @ts-ignore: Unreachable code error
            navigate(destinationRoute)
        } else {
            window.history.pushState(null, '', window.location.pathname)
        }
    }
}
