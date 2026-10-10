import { describe, expect, expectTypeOf, it } from 'vitest';

import { isNotNull, isNull } from '../null.js';

const nonNullValues = [undefined, 0, '', false, {}, 'text'];

describe('isNull', () => {
  it('returns true for null', () => {
    expect(isNull(null)).toBe(true);
  });

  it.each(nonNullValues)('returns false for %s', (value) => {
    expect(isNull(value)).toBe(false);
  });

  it('narrows to null', () => {
    const value = 'text' as string | null;

    if (isNull(value)) {
      expectTypeOf(value).toEqualTypeOf<null>();
    } else {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});

describe('isNotNull', () => {
  it('returns false for null', () => {
    expect(isNotNull(null)).toBe(false);
  });

  it.each(nonNullValues)('returns true for %s', (value) => {
    expect(isNotNull(value)).toBe(true);
  });

  it('removes null in filter but keeps undefined', () => {
    const result = [1, null, undefined].filter(isNotNull);

    expect(result).toEqual([1, undefined]);
    expectTypeOf(result).toEqualTypeOf<(number | undefined)[]>();
  });
});
