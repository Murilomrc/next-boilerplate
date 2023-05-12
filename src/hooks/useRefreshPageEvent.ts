import { useEffect } from 'react'

export default function useRefreshPageEvent(message: string) {
    useEffect(() => {
        window.addEventListener('beforeunload', onRefreshPageEvent)
        return () =>
            window.removeEventListener('beforeunload', onRefreshPageEvent)
    }, [])

    const onRefreshPageEvent = (event: BeforeUnloadEvent) => {
        event.preventDefault()
        event.returnValue = message
        return message
    }
}
