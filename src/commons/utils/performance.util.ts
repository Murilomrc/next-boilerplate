export const measurePerformance = (name: string, fn: any, ...args: any[]) => {
    if (typeof fn !== 'function') {
        console.error(`Provide a valid function, ${typeof fn} provided`)
        return
    }
    console.time(name)
    fn.bind(this, ...args)
    console.timeEnd(name)
}

export const PerformanceUtils = {
    measurePerformance,
}
