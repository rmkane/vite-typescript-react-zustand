/**
 * Represents a two-level nested object type.
 *
 * Each `OuterKey` maps to an inner object,
 * where each `InnerKey` maps to a value of type `Value`.
 *
 * Example:
 * type StyleMap = NestedRecord<'increment' | 'decrement', 'basic' | 'async', string>
 *
 * Results in:
 * {
 *   increment: { basic: string; async: string },
 *   decrement: { basic: string; async: string }
 * }
 *
 * Useful for modeling structures like nested variant mappings or grouped dictionaries.
 */
export type NestedRecord<
  OuterKey extends string | number | symbol,
  InnerKey extends string | number | symbol,
  Value,
> = Record<OuterKey, Record<InnerKey, Value>>
