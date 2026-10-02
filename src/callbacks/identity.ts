/**
 * Returns the value it is given, unchanged.
 *
 * Useful as a default transform or a pass-through callback, so callers don't need to branch on
 * whether a transform was provided.
 *
 * @example
 * ```ts
 * function formatAll<T>(items: T[], format: (item: T) => T = identity): T[] {
 *   return items.map(format);
 * }
 *
 * formatAll([1, 2, 3]); // [1, 2, 3]
 * ```
 *
 * @param value - The value to return.
 * @returns `value`, unchanged.
 */
export function identity<T>(value: T): T {
  return value;
}
