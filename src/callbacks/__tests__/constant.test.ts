import { describe, expect, expectTypeOf, it } from 'vitest';

import { constant } from '../constant.js';

describe('constant', () => {
  it('returns a function that returns the given value', () => {
    expect(constant('hello')()).toBe('hello');
  });

  it('returns the same value on every call', () => {
    const getValue = constant(42);

    expect(getValue()).toBe(42);
    expect(getValue()).toBe(42);
  });

  it('returns the same object reference without copying', () => {
    const value = { id: 1 };

    expect(constant(value)()).toBe(value);
  });

  it.each([null, undefined, 0, '', false])('returns falsy value %s as-is', (value) => {
    expect(constant(value)()).toBe(value);
  });

  it('preserves the value type', () => {
    expectTypeOf(constant('hello')).toEqualTypeOf<() => string>();
    expectTypeOf(constant({ id: 1 })).returns.toEqualTypeOf<{ id: number }>();
  });
});
