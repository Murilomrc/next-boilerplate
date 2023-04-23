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

export const functionalDistinct = (value: any, index: number, self: any[]) =>
    self.indexOf(value) === index

export const distinct = (
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

export const ArrayUtils = {
    contains,
    distinct,
    equals,
    keepOnlyLast,
    sort,
}
