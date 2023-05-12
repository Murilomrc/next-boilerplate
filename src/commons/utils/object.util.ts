export const isEmpty = (object: any) =>
    Reflect.ownKeys(object).length === 0 && object.contructor === Object

export const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

/* export const pick = <T = any>(obj: T, props: Array<string>): Object => {
    return Object.keys(obj)
        .filter((props) => props.includes(key))
        .reduce((result: { [key: string]: any }, key): Object => {
            result[key] = obj[key as keyof T]
            return result
        }, {})
} */

export const ObjectUtils = {
    isEmpty,
    deepCopy,
}
