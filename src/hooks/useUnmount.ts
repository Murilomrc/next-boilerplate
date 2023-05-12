import { useEffect } from 'react'

export default function useMount(callback: any) {
    useEffect(() => {
        return callback
    }, [])
}
