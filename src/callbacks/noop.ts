/**
 * A function that does nothing and returns `undefined`.
 *
 * Useful as a default for optional callbacks, so callers can invoke them without checking
 * whether one was provided. Using a shared `noop` also makes intent clearer than an inline
 * `() => {}`.
 *
 * @example
 * ```ts
 * function load(onProgress: (percent: number) => void = noop) {
 *   onProgress(50);
 * }
 * ```
 */
export function noop(): void {
  return;
}
