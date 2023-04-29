import { Primitive } from '@/types'

export const isString = (value: unknown): value is string =>
    typeof value === 'string'

export const isNumber = (value: unknown): value is number =>
    typeof value === 'number'

export const isBoolean = (value: unknown): value is boolean =>
    typeof value === 'boolean'

export const isPrimitive = (value: unknown): value is Primitive =>
    isString(value) || isNumber(value) || isBoolean(value)

export const isArray = (value: unknown): value is [] =>
    typeof value === 'object' && Array.isArray(value)

export const TypeCheckUtils = {
    isString,
    isNumber,
    isBoolean,
    isPrimitive,
    isArray,
}
