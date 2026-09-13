/**
 * Checks if a value is undefined.
 * 
 * @param value - The value to check.
 * @returns True if the value is undefined, false otherwise.
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
    return value === undefined;
}

/**
 * Checks if a value is not undefined.
 * 
 * @param value - The value to check.
 * @returns True if the value is not undefined, false otherwise.
 */
export function isDefined<T>(value: T | undefined): value is T {
    return value !== undefined;
}