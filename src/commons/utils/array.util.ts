type SortTypes = 'alphabetic' | 'numeric'
type OrderTypes = 'asc' | 'desc'
interface ArraySortConfig {
    type?: SortTypes
    order?: OrderTypes
    attribute?: string
}

export const contains = (
    array: any[],
    value: any,
    attribute?: string | undefined
): boolean =>
    array.some((item: any) =>
        attribute ? item[attribute] === value : item === value
    )

export const containsRecursively = (
    array: any[],
    value: any,
    attribute?: string | undefined
): boolean =>
    array
        .flat(100)
        .some((item: any) =>
            attribute ? item[attribute] === value : item === value
        )

export const containsAllIn = (
    arrayTarget: any[],
    arrayCompare: any[],
    attribute?: string | undefined
): boolean => arrayTarget.every((item: any) => arrayCompare.includes(item))

export const functionalDistinct = (value: any, index: number, self: any[]) =>
    self.indexOf(value) === index

export const distinct = (array: any[], attribute?: string | string[]): any[] =>
    array.filter(
        (item: any, i: number, self: any[]) =>
            self.findIndex((selfItem: any) => {
                if (typeof attribute === 'string')
                    return selfItem[attribute] === item[attribute]
                if (Array.isArray(attribute))
                    return (
                        attribute.filter(
                            (attr) => selfItem[attr] === item[attr]
                        ).length === attribute.length
                    )
                return item === selfItem
            }) === i
    )

export const distinctByValue = (
    array: any[],
    value: any,
    attribute?: string | undefined
): any[] =>
    array.filter((item: any) =>
        attribute ? item[attribute] === value : item === value
    )

export const equals = (
    array: any[],
    value: any,
    attribute?: string | undefined
): any[] =>
    array.filter((item: any) =>
        attribute ? item[attribute] !== value : item !== value
    )

export const keepOnlyLast = (array: any[]): any[] =>
    array.filter((_, index: number) => array.length - 1 === index)

const arrayValue = (value: any, objectProp: string) =>
    value[objectProp] || value

const prepareSort = <T>(array: T[], attribute?: string, callback?: any) => {
    return array.sort((currentValue: T, nextValue: T) => {
        if (attribute) {
            currentValue = arrayValue(currentValue, attribute)
            nextValue = arrayValue(nextValue, attribute)
        }
        return callback(currentValue, nextValue)
    })
}

export const sort = <T = any>(array: T[], sortConfig: ArraySortConfig): T[] => {
    const { type, order = 'asc', attribute } = sortConfig
    const isAsc = order === 'asc'

    if (!type)
        console.warn('Sort type not defined. Sorting will not take effect.')

    const sortedArray = prepareSort(
        array,
        attribute,
        (currentValue: any, nextValue: any) => {
            let value = 0
            if (type === 'numeric') value = currentValue - nextValue
            if (type === 'alphabetic')
                value = currentValue.localeCompare(nextValue)
            return value
        }
    )
    return isAsc ? sortedArray : sortedArray.reverse()
}

export const removeByIndex = (array: any[], index: number) => {
    if (array?.[index]) array.splice(index, 1)
}

export const keepOnlyLastOccurrence = (array: any[], attribute: string) =>
    array.filter(
        (item: any, index, selfArray: any[]) =>
            selfArray.findLastIndex(
                (selfItem: any) => selfItem[attribute] === item[attribute]
            ) === index
    )

export const deepCopy = <T = any>(array: T[]): T[] =>
    JSON.parse(JSON.stringify(array))

export const buildNumberArray = (size: number): number[] =>
    Array.from(Array(size).keys())

export const hasAllSameValue = <T = any>(array: T[], attribute: keyof T) =>
    array.every((item) => item[attribute] === array[0][attribute])

export const ArrayUtils = {
    distinct,
    contains,
    containsAllIn,
    containsRecursively,
    distinctByValue,
    equals,
    keepOnlyLast,
    sort,
    removeByIndex,
    keepOnlyLastOccurrence,
    deepCopy,
    buildNumberArray,
    hasAllSameValue,
}
