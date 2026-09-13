/**
 * Returns a function that returns a constant value.
 *
 * Intended only for use in certain APIs where a callback is required, but you want it to return a constant value.
 *
 * @example `
 * function getValue<T>(provider: () => T): T {
 *   return provider();
 * }
 *
 * getValue(() => 'hello'); // 'hello'
 * getValue(constant('hello')); // 'hello'
 * `
 *
 * @param value - The value to return.
 * @returns A function that returns the constant value.
 */
export function constant<T>(value: T): () => T {
  return () => value;
}
