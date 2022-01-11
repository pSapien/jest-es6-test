type ReduceCbType = (
  previousValue: number,
  currentValue: number,
  currentIndex: number,
  array: number[]
) => number;

export function createOperation(cb: ReduceCbType, defaultValue = 0) {
  return (...args) => args.reduce(cb, defaultValue);
}
