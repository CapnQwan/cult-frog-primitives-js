/**
 * Checks if a value is a string.
 * 
 * @param value - The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

/**
 * Checks if a value is not a string.
 * 
 * @param value - The value to check.
 * @returns True if the value is not a string, false otherwise.
 */
export function isNotString(value: unknown): value is Exclude<unknown, string> {
    return typeof value !== 'string';
}