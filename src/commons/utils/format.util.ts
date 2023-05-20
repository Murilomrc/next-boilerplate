import { TypeCheckUtils } from './typeCheck.util'

export const formatNumberToCurrency = (
    value: number,
    currency: string = 'EUR',
    locale: string = 'nl-NL'
) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value)
}

export const formatNumberToMoney = (money: string | number) =>
    money
        .toString()
        .replace(
            new RegExp(
                `(?!^)(?=(\\d{3})+${
                    money.toString().includes('.') ? '\\.' : '$'
                })`,
                'g'
            ),
            ','
        )

export const formatNumberToDecimal = (value: string | number) => {
    if (TypeCheckUtils.isString(value)) value = +value.replace(/\,/g, '.')
    return new Intl.NumberFormat('de-DE').format(value)
}

export const FormatUtils = {
    numberToCurrency: formatNumberToCurrency,
    numberToMoney: formatNumberToMoney,
    numberToDecimal: formatNumberToDecimal,
}
