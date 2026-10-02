/**
 * Checks if a value is a plain object, e.g. an object literal or `Object.create(null)`.
 * Arrays, class instances and built-ins such as `Date` or `Map` are not records.
 *
 * @param value - The value to check.
 * @returns True if the value is a record, false otherwise.
 */
export function isRecord(value: unknown): value is Record<PropertyKey, unknown> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype: unknown = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

/**
 * Checks if a value is not a record.
 *
 * @param value - The value to check.
 * @returns True if the value is not a record, false otherwise.
 */
export function isNotRecord<T>(value: T): value is Exclude<T, Record<PropertyKey, unknown>> {
  return !isRecord(value);
}

/**
 * Checks if a value has a specific own property.
 *
 * @param value - The value to check.
 * @param key - The key to check.
 * @returns True if the value has the own property, false otherwise.
 */
export function hasProperty<K extends PropertyKey>(
  value: object,
  key: K
): value is Record<K, unknown> {
  return Object.hasOwn(value, key);
}
