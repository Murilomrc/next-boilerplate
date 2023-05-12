import { useEffect, useState } from 'react'
import axios from 'axios'

interface UseGeolocationProps {
    IPv4?: string
    city?: string
    countryCode?: string
    countryName?: string
    latitude?: number
    longitude?: number
    postal?: string
    state?: string
}

export default function useGeolocation() {
    const [geolocation, setGeolocation] = useState<UseGeolocationProps>({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        const geolocationData = res.data
        setGeolocation({
            ...geolocationData,
            countryCode: geolocationData.country_code,
            countryName: geolocationData.country_name,
        })
    }

    return {
        geolocation,
    }
}
