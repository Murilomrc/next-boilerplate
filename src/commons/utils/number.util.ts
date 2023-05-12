export const roundNumberExactDecimal = (number: number, decimal: number) =>
    Math.round(number * 10 ** decimal) / 10 ** decimal

export const average = (...numbers: number[]) =>
    numbers.reduce((prevNum: number, currentNum) => prevNum + currentNum, 0) /
    numbers.length

export const isEven = (number: number) => number % 2 === 0

export const NumberUtils = {
    roundNumberExactDecimal,
    average,
}
