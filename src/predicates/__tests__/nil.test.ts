import { describe, expect, expectTypeOf, it } from 'vitest';

import { isNil, isNotNil } from '../nil.js';

const nilValues = [null, undefined];
const nonNilValues = [0, '', false, Number.NaN, [], {}, 'text', 1];

describe('isNil', () => {
  it.each(nilValues)('returns true for %s', (value) => {
    expect(isNil(value)).toBe(true);
  });

  it.each(nonNilValues)('returns false for %s', (value) => {
    expect(isNil(value)).toBe(false);
  });

  it('narrows to null | undefined', () => {
    const value = 'text' as string | null | undefined;

    if (isNil(value)) {
      expectTypeOf(value).toEqualTypeOf<null | undefined>();
    } else {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});

describe('isNotNil', () => {
  it.each(nilValues)('returns false for %s', (value) => {
    expect(isNotNil(value)).toBe(false);
  });

  it.each(nonNilValues)('returns true for %s', (value) => {
    expect(isNotNil(value)).toBe(true);
  });

  it('removes null and undefined in filter while keeping falsy values', () => {
    const result = [1, null, 0, undefined, 2].filter(isNotNil);

    expect(result).toEqual([1, 0, 2]);
    expectTypeOf(result).toEqualTypeOf<number[]>();
  });
});
