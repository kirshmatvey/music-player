
export const curry = (func: (...args: any[]) => any, ) => {
  return function inner(...args: any[]) {
    if (func.length <= args.length) {
      return func(...args)
    } else {
      return (...rest: any[]) => inner(...args, ...rest)
    }
  }
}