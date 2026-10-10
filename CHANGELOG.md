# Changelog

All notable changes to `@cult-frog/primitives` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.2] - 2026-10-11

### Added

- `CHANGELOG.md` is now included in the published package.
- Release workflow that publishes to npm when a `v*` tag is pushed.

### Changed

- Tests moved into `__tests__` directories alongside the source they cover.
  The package `files` list now excludes `src/**/__tests__`, so test files stay out of the tarball.

## [0.1.1] - 2026-10-05

Tagged but never published to npm. Its fix is included in 0.1.2.

### Fixed

- Test files (`*.test.ts`) are no longer included in the published package's `src` directory.

## [0.1.0] - 2026-10-05

Initial release.

### Added

- Callback helpers:
  - `constant(value)`: returns a function that always returns `value`.
  - `identity(value)`: returns its argument unchanged.
  - `noop()`: does nothing and returns `undefined`.
  - `once(fn)`: wraps `fn` so it runs at most once, caching the result for later calls and preserving `this`.
- Type guard predicates:
  - `isNil` / `isNotNil`: checks for `null` or `undefined`.
  - `isNull` / `isNotNull`: checks for `null`.
  - `isUndefined` / `isNotUndefined`: checks for `undefined`.
  - `isNumber`: checks for a finite number (`NaN`, `Infinity` and `-Infinity` are rejected).
  - `isString`: checks for a string.
  - `isRecord` / `isNotRecord`: checks for a plain object (an object literal or `Object.create(null)`). Arrays, class instances and built-ins such as `Date` or `Map` are rejected.
  - `hasProperty(value, key)`: checks that `key` is an own property of `value` and narrows its type.
- TSDoc comments for every export and a README covering usage.
- Unit tests for every export.
- `prepublishOnly` runs lint, type checking, tests and the build before publishing.

[Unreleased]: https://github.com/CapnQwan/cult-frog-primitives-js/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/CapnQwan/cult-frog-primitives-js/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/CapnQwan/cult-frog-primitives-js/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/CapnQwan/cult-frog-primitives-js/releases/tag/v0.1.0
