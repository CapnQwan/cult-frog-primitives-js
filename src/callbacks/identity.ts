/**
 * Returns the value itself.
 * Might seem pointless, but is intended for use in transform functions.
 *
 * @example `const result = arr.map(optionalCallback ?? identity)`
 *
 * @param value - The value to return.
 * @returns The value itself.
 */
export function identity<T>(value: T): T {
  return value;
}
