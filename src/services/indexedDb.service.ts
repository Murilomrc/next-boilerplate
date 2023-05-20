const request = window.indexedDB.open('DBTest', 1)

const IndexedDbService = {
    save: () => {
        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            if (event.target) {
                const db = (event.target as any).result
                const store = db.createObjectStore('store1')
            }
        }
    },
}

export default IndexedDbService
