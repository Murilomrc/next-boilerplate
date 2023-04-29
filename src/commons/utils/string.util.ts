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

export const StringUtils = {
    toOnlyNumbers,
    toZerofill,
    capitalize,
    uncapitalize,
    isNumber,
}
