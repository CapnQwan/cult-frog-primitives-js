/**
 * Checks if a value is a finite number. `NaN`, `Infinity` and `-Infinity` are not numbers.
 *
 * @param value - The value to check.
 * @returns True if the value is a finite number, false otherwise.
 */
export function isNumber(value: unknown): value is number {
  return Number.isFinite(value);
}
