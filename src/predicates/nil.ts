/**
 * Checks if a value is `null` or `undefined`.
 *
 * @example
 * ```ts
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 * isNil(''); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is `null` or `undefined`, otherwise `false`.
 */
export function isNil<T>(value: T | null | undefined): value is null | undefined {
  return value == null;
}

/**
 * Checks if a value is neither `null` nor `undefined`, narrowing it to its non-nullable type.
 *
 * Unlike a truthiness check, falsy values such as `0`, `''` and `false` are kept.
 *
 * @example
 * ```ts
 * const values = [1, null, 0, undefined, 2];
 * const present = values.filter(isNotNil); // number[]: [1, 0, 2]
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is not `null` or `undefined`, otherwise `false`.
 */
export function isNotNil<T>(value: T | null | undefined): value is T {
  return value != null;
}
