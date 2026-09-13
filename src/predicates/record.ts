/**
 * Checks if a value is a record.
 * 
 * @param value - The value to check.
 * @returns True if the value is a record, false otherwise.
 */
export function isRecord<T extends object>(value: T): value is T {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Checks if a value is not a record.
 * 
 * @param value - The value to check.
 * @returns True if the value is not a record, false otherwise.
 */
export function isNotRecord<T extends object>(value: T): value is T {
    return !isRecord(value);
}

/**
 * Checks if a value has a specific property.
 * 
 * @param value - The value to check.
 * @param key - The key to check.
 * @returns True if the record has a specific property, false otherwise.
 */
export function hasProperty<T extends object, K extends keyof T>(value: T, key: K): value is T & Record<K, T[K]> {
    return Object.prototype.hasOwnProperty.call(value, key);
}