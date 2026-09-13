/**
 * Checks if a value is null.
 * 
 * @param value - The value to check.
 * @returns True if the value is null, false otherwise.
 */
export function isNull<T>(value: T | null): value is null {
    return value === null;
}

/**
 * Checks if a value is not null.
 * 
 * @param value - The value to check.
 * @returns True if the value is not null, false otherwise.
 */
export function isNotNull<T>(value: T | null): value is T {
    return value !== null;
}
