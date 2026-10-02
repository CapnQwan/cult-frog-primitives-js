/// <reference types="node" />
import { runInNewContext } from 'node:vm';
import { describe, expect, expectTypeOf, it } from 'vitest';

import { hasProperty, isNotRecord, isRecord } from './record.js';

class Example {
  value = 1;
}

const records = [{}, { id: 1 }, Object.create(null), JSON.parse('{"a":1}')];
const nonRecords = [
  null,
  undefined,
  0,
  'text',
  true,
  [],
  new Date(),
  new Map(),
  new Set(),
  /regex/,
  new Example(),
  Promise.resolve(),
  () => {},
];

describe('isRecord', () => {
  it.each(records)('returns true for plain object %o', (value) => {
    expect(isRecord(value)).toBe(true);
  });

  it.each(nonRecords)('returns false for %o', (value) => {
    expect(isRecord(value)).toBe(false);
  });

  it('returns false for objects from another realm', () => {
    expect(isRecord(runInNewContext('({})'))).toBe(false);
  });

  it('narrows unknown to Record<PropertyKey, unknown>', () => {
    const value: unknown = {};

    if (isRecord(value)) {
      expectTypeOf(value).toEqualTypeOf<Record<PropertyKey, unknown>>();
    }
  });
});

describe('isNotRecord', () => {
  it.each(records)('returns false for plain object %o', (value) => {
    expect(isNotRecord(value)).toBe(false);
  });

  it.each(nonRecords)('returns true for %o', (value) => {
    expect(isNotRecord(value)).toBe(true);
  });

  it('narrows the record out of a union', () => {
    const value = 'text' as string | Record<string, unknown>;

    if (isNotRecord(value)) {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});

describe('hasProperty', () => {
  it('returns true for own properties', () => {
    expect(hasProperty({ id: 1 }, 'id')).toBe(true);
  });

  it('returns true for own properties holding undefined', () => {
    expect(hasProperty({ id: undefined }, 'id')).toBe(true);
  });

  it('returns false for missing properties', () => {
    expect(hasProperty({ id: 1 }, 'name')).toBe(false);
  });

  it('returns false for inherited properties', () => {
    expect(hasProperty({}, 'toString')).toBe(false);
    expect(hasProperty(Object.create({ inherited: true }), 'inherited')).toBe(false);
  });

  it('supports symbol and numeric keys', () => {
    const key = Symbol('key');

    expect(hasProperty({ [key]: 1 }, key)).toBe(true);
    expect(hasProperty(['a'], 0)).toBe(true);
  });

  it('works on objects without a prototype', () => {
    const value = Object.create(null) as object;
    Object.assign(value, { id: 1 });

    expect(hasProperty(value, 'id')).toBe(true);
  });

  it('narrows the object so the property can be read', () => {
    const value: object = { id: 1 };

    if (hasProperty(value, 'id')) {
      expectTypeOf(value.id).toEqualTypeOf<unknown>();
    }
  });
});
