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
