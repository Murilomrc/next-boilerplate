import { Primitive } from '@/types'
import { ObjectType } from 'typescript'

export const isTypeString = (value: unknown): value is string =>
    typeof value === 'string'

export const isTypeNumber = (value: unknown): value is number =>
    typeof value === 'number'

export const isTypeBoolean = (value: unknown): value is boolean =>
    typeof value === 'boolean'

export const isTypePrimitive = (value: unknown): value is Primitive =>
    isTypeString(value) || isTypeNumber(value) || isTypeBoolean(value)

export const isTypeArray = (value: unknown): value is [] =>
    typeof value === 'object' && Array.isArray(value)

export const isTypeKeyExists = (
    key: string,
    object: ObjectType
): key is keyof ObjectType => key in object

export const TypeCheckUtils = {
    isString: isTypeString,
    isNumber: isTypeNumber,
    isBoolean: isTypeBoolean,
    isPrimitive: isTypePrimitive,
    isArray: isTypeArray,
    isKeyExists: isTypeKeyExists,
}
