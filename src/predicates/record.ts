/**
 * Checks if a value is a plain object, i.e. an object literal or an object created with
 * `Object.create(null)`.
 *
 * Arrays, class instances and built-ins such as `Date`, `Map` and `RegExp` are rejected. This
 * makes it suitable for validating parsed data such as JSON before reading its properties.
 *
 * Objects created in another realm (an iframe or a Node `vm` context) are also rejected, because
 * their prototype is a different `Object.prototype`.
 *
 * @example
 * ```ts
 * isRecord({ id: 1 }); // true
 * isRecord(Object.create(null)); // true
 * isRecord([]); // false
 * isRecord(new Date()); // false
 * isRecord(null); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a plain object, otherwise `false`.
 */
export function isRecord(value: unknown): value is Record<PropertyKey, unknown> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype: unknown = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

/**
 * Checks if a value is not a plain object. This is the inverse of {@link isRecord}.
 *
 * @example
 * ```ts
 * isNotRecord(new Date()); // true
 * isNotRecord([]); // true
 * isNotRecord({ id: 1 }); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if `value` is not a plain object, otherwise `false`.
 */
export function isNotRecord<T>(value: T): value is Exclude<T, Record<PropertyKey, unknown>> {
  return !isRecord(value);
}

/**
 * Checks if an object has the given key as its own property, narrowing the object so the
 * property can be read.
 *
 * Inherited properties are not counted, so keys such as `toString` do not match. The property
 * may still hold `undefined`.
 *
 * @example
 * ```ts
 * const data: unknown = JSON.parse(input);
 *
 * if (isRecord(data) && hasProperty(data, 'id') && isNumber(data.id)) {
 *   data.id; // number
 * }
 * ```
 *
 * @param value - The object to check.
 * @param key - The property key to look for.
 * @returns `true` if `value` has `key` as an own property, otherwise `false`.
 */
export function hasProperty<K extends PropertyKey>(
  value: object,
  key: K
): value is Record<K, unknown> {
  return Object.hasOwn(value, key);
}
