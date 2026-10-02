/**
 * Checks if a value is a number.
 *
 * @param value - The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * Checks if a value is not a number.
 *
 * @param value - The value to check.
 * @returns True if the value is not a number, false otherwise.
 */
export function isNotNumber<T>(value: T): value is Exclude<T, number> {
  return typeof value !== 'number';
}
