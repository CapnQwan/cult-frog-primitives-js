import { describe, expect, expectTypeOf, it } from 'vitest';

import { isString } from './string.js';

describe('isString', () => {
  it.each(['', 'text', `template`])('returns true for %j', (value) => {
    expect(isString(value)).toBe(true);
  });

  it.each([0, null, undefined, true, {}, [], Symbol('s')])('returns false for %s', (value) => {
    expect(isString(value)).toBe(false);
  });

  it('returns false for String wrapper objects', () => {
    expect(isString(new String('text'))).toBe(false);
  });

  it('narrows unknown to string', () => {
    const value: unknown = 'text';

    if (isString(value)) {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});
