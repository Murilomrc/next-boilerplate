export const delay = (ms: number = 3000) =>
    new Promise((res) => setTimeout(res, ms))

export const TimeUtils = {
    delay,
}
