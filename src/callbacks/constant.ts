/**
 * Creates a function that always returns the given value.
 *
 * Useful when an API expects a callback or factory but you already have the value, e.g. a
 * default provider or a stubbed dependency in tests.
 *
 * The same value is returned on every call; objects are not copied.
 *
 * @example
 * ```ts
 * const getDefaultName = constant('anonymous');
 * getDefaultName(); // 'anonymous'
 *
 * const names = users.map((user) => user.name ?? getDefaultName());
 * ```
 *
 * @param value - The value the returned function should produce.
 * @returns A function that returns `value` every time it is called.
 */
export function constant<T>(value: T): () => T {
  return () => value;
}
