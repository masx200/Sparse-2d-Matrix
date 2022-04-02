import { assertInteger } from "../test/assertInteger";
import { assert_true } from "../test/assert_true";
import { assert_not_undefined } from "./assert_not_undefined";
import { createGetOrCreateDeepestMap } from "./createGetOrCreateDeepestMap";
import { assertValidateKeys as assertValidateKeys } from "./createKeysValidator";
import { ExtractMapValue } from "./ExtractMapValue";
import {
    HighDimensionalMap,
    HighDimensional_symbol,
    raw_symbol,
} from "./HighDimensionalMap";
import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { iterate_deep_map_keys } from "./iterate_map_keys";
import { KeysOfHighDimensionalMap } from "./KeysOfHighDimensionalMap";
import { SubtractInput } from "./SubtractInput";
export function createHighDimensionalMap<
    K,
    V extends Exclude<any, undefined>,
    D extends Exclude<SubtractInput, 0>
>(dimension: D): HighDimensionalMap<K, V, D> {
    assert_true(dimension > 0, "dimension must greater than zero");
    assertInteger(dimension);
    const raw = new Map<
        K,
        ExtractMapValue<HighDimensionalMapRaw<K, V, D>>
    >() as HighDimensionalMapRaw<K, V, D>;
    function clear(): void {
        raw.clear();
    }
    // const keysValidator: typeof createKeysValidator<K,D> = createKeysValidator;
    const createOrGetDeepestMap = createGetOrCreateDeepestMap;
    function entries(): IterableIterator<[KeysOfHighDimensionalMap<K, D>, V]> {
        return [...keys()]
            .map((keys) => [keys, get(keys)])

            [Symbol.iterator]() as IterableIterator<
            [KeysOfHighDimensionalMap<K, D>, V]
        >;
    }
    const get = (keys: KeysOfHighDimensionalMap<K, D>): V | undefined => {
        assertValidateKeys<K, D>(dimension, keys);
        const deepest_map = createOrGetDeepestMap(raw, keys);
        const last_key = keys.slice(-1)[0];
        return deepest_map.get(last_key);
    };
    const keys = (): IterableIterator<KeysOfHighDimensionalMap<K, D>> => {
        const result: KeysOfHighDimensionalMap<K, D>[] = [];
        //@ts-ignore
        iterate_deep_map_keys(raw, (o: KeysOfHighDimensionalMap<K, D>) => {
            assert_true(o.length === dimension, "array length mismatch");
            assertValidateKeys(dimension, o);
            //@ts-ignore
            result.push(o);
        });
        return result[Symbol.iterator]();
    };

    const obj: HighDimensionalMap<K, V, D> = {
        get,
        set(keys: KeysOfHighDimensionalMap<K, D>, value: V) {
            assert_not_undefined(value);
            assertValidateKeys<K, D>(dimension, keys);
            const deepest_map = createOrGetDeepestMap(raw, keys);
            const last_key = keys.slice(-1)[0];
            deepest_map.set(last_key, value);
            return obj;
        },
        delete(keys: KeysOfHighDimensionalMap<K, D>) {
            assertValidateKeys<K, D>(dimension, keys);
            const deepest_map = createOrGetDeepestMap(raw, keys);
            const last_key = keys.slice(-1)[0];
            return deepest_map.delete(last_key);
        },
        keys,
        values(): IterableIterator<V> {
            return [...keys()]
                .map((keys) => get(keys))
                .filter((a) => typeof a !== "undefined")
                [Symbol.iterator]() as IterableIterator<V>;
        },
        entries(): IterableIterator<[KeysOfHighDimensionalMap<K, D>, V]> {
            return entries();
        },
        [HighDimensional_symbol]: true,
        dimension,
        // [raw_symbol]: raw,
        clear,
        get [Symbol.toStringTag]() {
            return "HighDimensionalMap";
        },
        [Symbol.iterator](): IterableIterator<
            [KeysOfHighDimensionalMap<K, D>, V]
        > {
            return entries();
        },
    };
    return obj;
}
