/**
 * Wraps a function so it runs at most once. Later calls return the result of the first call.
 *
 * Useful for lazy initialisation and for guarding side effects that must only happen once,
 * such as setup, teardown or one-time warnings.
 *
 * - Arguments passed after the first successful call are ignored.
 * - `this` is forwarded to `fn`, so the wrapper can be used as a method.
 * - If `fn` throws, nothing is cached and the next call tries again.
 * - After a successful call the reference to `fn` is released.
 * - When used as a method on a shared prototype, `fn` runs once in total, not once per instance.
 *
 * @example
 * ```ts
 * const init = once(() => {
 *   console.log('initialising');
 *   return createClient();
 * });
 *
 * init(); // logs 'initialising' and returns the client
 * init(); // returns the same client without logging
 * ```
 *
 * @param fn - The function to wrap.
 * @returns A function with the same signature as `fn` that only invokes it once.
 */
export function once<This, Args extends unknown[], R>(
  fn: (this: This, ...args: Args) => R
): (this: This, ...args: Args) => R {
  let pending: ((this: This, ...args: Args) => R) | undefined = fn;
  let result: R;

  return function (this: This, ...args: Args): R {
    if (pending) {
      result = pending.apply(this, args);
      pending = undefined;
    }

    return result;
  };
}
