/**
 * Transforma todas as propriedades de um objeto em opcionais
 *
 * @type {DeepPartial}
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Transforma as propriedas para readonly
export type ReadonlyProps<T> = { readonly [P in keyof T]: T[P] }

// Extrai o tipo 'resolved' da Promise
export type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
    ? U
    : never

// Faz a junção de diversos tipos
export type MergeTypes<T extends object[]> = T[number]

export type OptionalProps<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>
