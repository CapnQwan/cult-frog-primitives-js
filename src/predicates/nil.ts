/**
 * Checks if a value is null or undefined.
 * 
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNil<T>(value: T | null | undefined): value is null | undefined {
    return value == null;
  }

/**
 * Checks if a value is not null or undefined.
 * 
 * @param value - The value to check.
 * @returns True if the value is not null or undefined, false otherwise.
 */
export function isNotNil<T>(value: T | null | undefined): value is T {
    return value != null;
}