/**
 * Checks if a value is `undefined`. `null` is not considered `undefined`; use {@link isNil} to
 * check for both.
 *
 * @example
 * ```ts
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is `undefined`, otherwise `false`.
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
  return value === undefined;
}

/**
 * Checks if a value is not `undefined`, narrowing `undefined` out of its type. `null` passes
 * this check; use {@link isNotNil} to exclude both.
 *
 * @example
 * ```ts
 * const lookups = ids.map((id) => cache.get(id)); // (User | undefined)[]
 * const cached = lookups.filter(isNotUndefined); // User[]
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is not `undefined`, otherwise `false`.
 */
export function isNotUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
