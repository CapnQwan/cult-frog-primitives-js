# @cult-frog/primitives

Small, dependency-free TypeScript utilities for everyday code: type-narrowing predicates and common callback helpers.

- **Type-safe.** Every predicate is a TypeScript type guard, so it narrows types in `if` statements and in `Array.prototype.filter`.
- **Tree-shakeable.** It is ESM-only, has no side effects and no dependencies, so you only ship what you import.
- **Predictable.** Edge cases like `NaN`, class instances and inherited properties are handled deliberately and documented.

## Installation

```sh
pnpm add @cult-frog/primitives
# or
npm install @cult-frog/primitives
```

Requires Node.js 20.19 or later. The package is published as ES modules with bundled type declarations.

## Usage

```ts
import { hasProperty, isNotNil, isNumber, isRecord, once } from '@cult-frog/primitives';

// Remove null and undefined while keeping the array's element type.
const ids = [1, null, 2, undefined].filter(isNotNil); // number[]

// Safely read properties from unknown data.
const data: unknown = JSON.parse(input);
if (isRecord(data) && hasProperty(data, 'id') && isNumber(data.id)) {
  console.log(data.id); // number
}

// Run expensive setup only once.
const getClient = once(() => createClient());
```

## API

### Predicates

Every predicate is a type guard. Each `isX` check has an `isNotX` counterpart where the negation is useful for narrowing.

| Function | Returns `true` when the value is |
| --- | --- |
| `isNil(value)` | `null` or `undefined` |
| `isNotNil(value)` | neither `null` nor `undefined` |
| `isNull(value)` | `null` |
| `isNotNull(value)` | not `null` |
| `isUndefined(value)` | `undefined` |
| `isNotUndefined(value)` | not `undefined` |
| `isNumber(value)` | a finite number |
| `isString(value)` | a string primitive |
| `isRecord(value)` | a plain object |
| `isNotRecord(value)` | not a plain object |
| `hasProperty(object, key)` | an object with `key` as its own property |

Worth knowing:

- **`isNumber`** rejects `NaN`, `Infinity` and `-Infinity`. It never coerces, so `'42'` is not a number.
- **`isRecord`** accepts only object literals and `Object.create(null)` objects. Arrays, class instances and built-ins such as `Date` and `Map` are rejected, which makes it a safe first check on parsed JSON. Objects from another realm, such as an iframe, are also rejected.
- **`hasProperty`** ignores inherited properties such as `toString`. The property it finds can still hold `undefined`.
- **`isNotNil`** keeps falsy values such as `0`, `''` and `false`, unlike `filter(Boolean)`.

### Callbacks

| Function | Description |
| --- | --- |
| `noop()` | Does nothing and returns `undefined`. Use it as a default for optional callbacks. |
| `identity(value)` | Returns `value` unchanged. Use it as a default transform. |
| `constant(value)` | Returns a function that always returns `value`. |
| `once(fn)` | Returns a function that calls `fn` at most once and caches its result. |

How `once` behaves:

- Calls after the first successful one return the cached result and ignore their arguments.
- `this` is forwarded, so the wrapped function can be used as a method.
- If `fn` throws, nothing is cached and the next call tries again.
- When used on a shared prototype, `fn` runs once in total rather than once per instance.

## License

[MIT](./LICENSE) © Quin Partridge
