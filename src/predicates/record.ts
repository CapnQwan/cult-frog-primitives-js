/**
 * Checks if a value is a record: a non-null object that is not an array.
 *
 * @param value - The value to check.
 * @returns True if the value is a record, false otherwise.
 */
export function isRecord(value: unknown): value is Record<PropertyKey, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
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
