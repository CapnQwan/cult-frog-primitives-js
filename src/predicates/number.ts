/**
 * Checks if a value is a finite number.
 *
 * `NaN`, `Infinity` and `-Infinity` are rejected, as are numeric strings such as `'42'`; no
 * coercion is performed.
 *
 * @example
 * ```ts
 * isNumber(42); // true
 * isNumber(-1.5); // true
 * isNumber(NaN); // false
 * isNumber(Infinity); // false
 * isNumber('42'); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a finite number, otherwise `false`.
 */
export function isNumber(value: unknown): value is number {
  return Number.isFinite(value);
}
