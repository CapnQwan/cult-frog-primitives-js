/**
 * Checks if a value is `null`. `undefined` is not considered `null`; use {@link isNil} to check
 * for both.
 *
 * @example
 * ```ts
 * isNull(null); // true
 * isNull(undefined); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is `null`, otherwise `false`.
 */
export function isNull<T>(value: T | null): value is null {
  return value === null;
}

/**
 * Checks if a value is not `null`, narrowing `null` out of its type. `undefined` passes this
 * check; use {@link isNotNil} to exclude both.
 *
 * @example
 * ```ts
 * const rows: (Row | null)[] = await fetchRows();
 * const found = rows.filter(isNotNull); // Row[]
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is not `null`, otherwise `false`.
 */
export function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
