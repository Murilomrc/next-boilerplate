export const formatNumberToCurrency = (
    value: number,
    currency: string = 'EUR',
    locale: string = 'nl-NL'
) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    })
    return formatter.format(value)
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

export const FormatUtils = {
    numberToCurrency: formatNumberToCurrency,
    numberToMoney: formatNumberToMoney,
}
