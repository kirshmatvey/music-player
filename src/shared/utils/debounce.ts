export const debounce = function (func: (...args: any[]) => any, delay: number = 700) {
  let timerId: number
  return function inner(...args: unknown[]) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
