import { describe, expect, expectTypeOf, it } from 'vitest';

import { identity } from '../identity.js';

describe('identity', () => {
  it.each([1, 'text', true, null, undefined, 0, ''])('returns %s unchanged', (value) => {
    expect(identity(value)).toBe(value);
  });

  it('returns the same object reference', () => {
    const value = { id: 1 };

    expect(identity(value)).toBe(value);
  });

  it('works as a default transform', () => {
    expect([1, 2, 3].map(identity)).toEqual([1, 2, 3]);
  });

  it('preserves the value type', () => {
    expectTypeOf(identity('text')).toEqualTypeOf<string>();
    expectTypeOf(identity({ id: 1 })).toEqualTypeOf<{ id: number }>();
  });
});
