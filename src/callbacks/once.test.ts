import { describe, expect, expectTypeOf, it, vi } from 'vitest';

import { once } from './once.js';

describe('once', () => {
  it('calls the wrapped function only once', () => {
    const fn = vi.fn(() => 'result');
    const wrapped = once(fn);

    wrapped();
    wrapped();
    wrapped();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('returns the first result on every call', () => {
    let count = 0;
    const wrapped = once(() => ++count);

    expect(wrapped()).toBe(1);
    expect(wrapped()).toBe(1);
  });

  it('passes arguments from the first call and ignores later ones', () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const wrapped = once(fn);

    expect(wrapped(1, 2)).toBe(3);
    expect(wrapped(10, 20)).toBe(3);
    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  it('caches undefined results without calling again', () => {
    const fn = vi.fn(() => undefined);
    const wrapped = once(fn);

    wrapped();
    wrapped();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('forwards this to the wrapped function', () => {
    const obj = {
      value: 42,
      get: once(function (this: { value: number }) {
        return this.value;
      }),
    };

    expect(obj.get()).toBe(42);
  });

  it('retries on the next call if the wrapped function throws', () => {
    let attempts = 0;
    const wrapped = once(() => {
      attempts++;
      if (attempts === 1) {
        throw new Error('first attempt fails');
      }
      return 'ok';
    });

    expect(() => wrapped()).toThrow('first attempt fails');
    expect(wrapped()).toBe('ok');
    expect(wrapped()).toBe('ok');
    expect(attempts).toBe(2);
  });

  it('runs once in total when used on a shared prototype', () => {
    class Counter {
      static calls = 0;

      init(): number {
        return ++Counter.calls;
      }
    }
    Counter.prototype.init = once(Counter.prototype.init);

    new Counter().init();
    new Counter().init();

    expect(Counter.calls).toBe(1);
  });

  it('preserves the parameter and return types', () => {
    const wrapped = once((a: number, b: string) => `${a}${b}`);

    expectTypeOf(wrapped).parameters.toEqualTypeOf<[number, string]>();
    expectTypeOf(wrapped).returns.toEqualTypeOf<string>();
  });
});
