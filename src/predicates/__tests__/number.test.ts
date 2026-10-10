import { describe, expect, expectTypeOf, it } from 'vitest';

import { isNumber } from '../number.js';

describe('isNumber', () => {
  it.each([0, -0, 1, -1, 1.5, Number.MAX_SAFE_INTEGER, Number.MIN_VALUE])(
    'returns true for %s',
    (value) => {
      expect(isNumber(value)).toBe(true);
    }
  );

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    'returns false for non-finite %s',
    (value) => {
      expect(isNumber(value)).toBe(false);
    }
  );

  it.each(['42', '', null, undefined, true, 10n, {}, []])(
    'returns false for non-number %s without coercion',
    (value) => {
      expect(isNumber(value)).toBe(false);
    }
  );

  it('returns false for Number wrapper objects', () => {
    expect(isNumber(new Number(1))).toBe(false);
  });

  it('narrows unknown to number', () => {
    const value: unknown = 1;

    if (isNumber(value)) {
      expectTypeOf(value).toEqualTypeOf<number>();
    }
  });
});
