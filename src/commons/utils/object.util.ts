export const isEmpty = (object: any) =>
    Reflect.ownKeys(object).length === 0 && object.contructor === Object

export const ObjectUtils = {
    isEmpty,
}
