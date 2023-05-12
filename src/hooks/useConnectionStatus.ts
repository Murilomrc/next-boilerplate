import { useEffect, useState } from 'react'

export default function useConnectionStatus() {
    const [connectionStatus, setConnectionStatus] = useState(true)

    // @ts-ignore: Unreachable code error
    const downlink = navigator.connection.downlink
    const isOnline = connectionStatus

    useEffect(() => {
        window.addEventListener('online', onConnectionStatusOnline)
        window.addEventListener('offline', onConnectionStatusOffline)
        return () => {
            window.removeEventListener('online', onConnectionStatusOnline)
            window.removeEventListener('offline', onConnectionStatusOffline)
        }
    }, [])

    const onConnectionStatusOnline = () => {
        setConnectionStatus(true)
    }

    const onConnectionStatusOffline = () => {
        setConnectionStatus(false)
    }

    return {
        connectionStatus,
        isOnline,
        downlink,
    }
}
