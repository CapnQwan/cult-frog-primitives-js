/**
 * Checks if a value is a string primitive. `String` wrapper objects are rejected.
 *
 * @example
 * ```ts
 * isString('hello'); // true
 * isString(''); // true
 * isString(42); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a string, otherwise `false`.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
