export interface IApiService {
    get: <T>(url: string, config: ApiServiceConfig) => Promise<T> | undefined
    post: <T>(
        url: string,
        body: object,
        config: ApiServiceConfig
    ) => Promise<T> | undefined
    put: <T>(
        url: string,
        body: object,
        config: ApiServiceConfig
    ) => Promise<T> | undefined
    patch: <T>(
        url: string,
        body: object,
        config: ApiServiceConfig
    ) => Promise<T> | undefined
    delete: <T>(url: string, config: ApiServiceConfig) => Promise<T> | undefined
    head: <T>(url: string, config: ApiServiceConfig) => Promise<T> | undefined
    options: <T>(
        url: string,
        config: ApiServiceConfig
    ) => Promise<T> | undefined
}

class ApiService implements IApiService {
    public baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }
    get<T>(url: string, config: ApiServiceConfig): Promise<T> | undefined {
        return
    }
    post<T>(
        url: string,
        body: object,
        config: ApiServiceConfig
    ): Promise<T> | undefined {
        return
    }
    put<T>(
        url: string,
        body: object,
        config: ApiServiceConfig
    ): Promise<T> | undefined {
        return
    }
    patch<T>(
        url: string,
        body: object,
        config: ApiServiceConfig
    ): Promise<T> | undefined {
        return
    }
    delete<T>(url: string, config: ApiServiceConfig): Promise<T> | undefined {
        return
    }
    head<T>(url: string, config: ApiServiceConfig): Promise<T> | undefined {
        return
    }
    options<T>(url: string, config: ApiServiceConfig): Promise<T> | undefined {
        return
    }
}

export interface ApiServiceConfig {
    params: object
    headers: object
}
