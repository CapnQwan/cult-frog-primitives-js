import { describe, expect, expectTypeOf, it } from 'vitest';

import { isNotUndefined, isUndefined } from './undefined.js';

const definedValues = [null, 0, '', false, {}, 'text'];

describe('isUndefined', () => {
  it('returns true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it.each(definedValues)('returns false for %s', (value) => {
    expect(isUndefined(value)).toBe(false);
  });

  it('narrows to undefined', () => {
    const value = 'text' as string | undefined;

    if (isUndefined(value)) {
      expectTypeOf(value).toEqualTypeOf<undefined>();
    } else {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});

describe('isNotUndefined', () => {
  it('returns false for undefined', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });

  it.each(definedValues)('returns true for %s', (value) => {
    expect(isNotUndefined(value)).toBe(true);
  });

  it('removes undefined in filter but keeps null', () => {
    const result = [1, null, undefined].filter(isNotUndefined);

    expect(result).toEqual([1, null]);
    expectTypeOf(result).toEqualTypeOf<(number | null)[]>();
  });
});
