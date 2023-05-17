export const toOnlyNumbers = (value: string) => value.replace(/\D/g, '')

export const toZerofill = (times: number, value: string | number) =>
    ('0'.repeat(times) + value).slice(-times)

export const capitalize = (
    value: string | undefined,
    firstOnly: boolean = true,
    locale: string = navigator.language
) =>
    value
        ? firstOnly
            ? value.trim().replace(/^\w/, (c) => c.toLocaleUpperCase(locale))
            : value
                  .trim()
                  .toLowerCase()
                  .replace(/\w\S*/g, (w) =>
                      w.replace(/^\w/, (c) => c.toLocaleUpperCase(locale))
                  )
        : ''

export const uncapitalize = (
    value: string | undefined,
    firstOnly: boolean = true,
    locale: string = navigator.language
) =>
    value
        ? firstOnly
            ? value.trim().replace(/^\w/, (c) => c.toLocaleLowerCase(locale))
            : value
                  .trim()
                  .toLowerCase()
                  .replace(/\w\S*/g, (w) =>
                      w.replace(/^\w/, (c) => c.toLocaleLowerCase(locale))
                  )
        : ''

export const isNumber = (value: string) => !isNaN(+value)

export const slugify = (value: string) =>
    value
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')

export const camelize = (value: string) =>
    value
        .replace(/[çÇ]+/g, 'c')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, '')
        .replace(/-/g, '')

export const charCount = (text: string, char: string) =>
    text.split(char).length - 1

export const replaceAll = (
    text: string,
    searchValue: string,
    replacer: string
) =>
    text.replace(
        new RegExp(searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        replacer
    )

export const StringUtils = {
    toOnlyNumbers,
    toZerofill,
    isNumber,
    capitalize,
    uncapitalize,
    camelize,
    slugify,
    charCount,
    replaceAll,
}
