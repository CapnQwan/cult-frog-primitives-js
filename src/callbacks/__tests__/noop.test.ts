import { describe, expect, expectTypeOf, it } from 'vitest';

import { noop } from '../noop.js';

describe('noop', () => {
  it('returns undefined', () => {
    expect(noop()).toBeUndefined();
  });

  it('can be used where a callback with arguments is expected', () => {
    const onProgress: (percent: number) => void = noop;

    expect(() => onProgress(50)).not.toThrow();
  });

  it('has a void return type', () => {
    expectTypeOf(noop).toEqualTypeOf<() => void>();
  });
});
