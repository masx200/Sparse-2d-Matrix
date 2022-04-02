import { assertInteger } from "../test/assertInteger";
import { assert_true } from "../test/assert_true";
import { ExtractMapValue } from "./ExtractMapValue";
import {
    HighDimensionalMap,
    HighDimensional_symbol,
    raw_symbol,
} from "./HighDimensionalMap";
import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { isObjectOrFunction } from "./isObjectOrFunction";
import { KeysOfHighDimensionalMap } from "./KeysOfHighDimensionalMap";
import { SubtractInput } from "./SubtractInput";

export function createHighDimensionalMap<
    K,
    V,
    D extends Exclude<SubtractInput, 0>
>(dimension: D): HighDimensionalMap<K, V, D> {
    assert_true(dimension > 0, "dimension must greater than zero");
    assertInteger(dimension);
    const raw = new Map<
        K,
        ExtractMapValue<HighDimensionalMapRaw<K, V, D>>
    >() as HighDimensionalMapRaw<K, V, D>;
    function clear() {
        raw.clear();
    }
    const keysValidator = createKeysValidator;
    const createOrGetDeepestMap = createGetOrCreateDeepestMap;
    function entries() {}
    const obj: HighDimensionalMap<K, V, D> = {
        get(keys: KeysOfHighDimensionalMap<K, D>) {
            const deepest_map = createOrGetDeepestMap(raw, keys);
        },
        set(keys: KeysOfHighDimensionalMap<K, D>, value: V) {},
        delete(keys: KeysOfHighDimensionalMap<K, D>) {},
        keys() {},
        values() {},
        entries() {
            return entries();
        },
        [HighDimensional_symbol]: true,
        dimension,
        [raw_symbol]: raw,
        clear,
        get [Symbol.toStringTag]() {
            return "HighDimensionalMap";
        },
        [Symbol.iterator]() {
            return entries();
        },
    };
    return obj;
}
function createGetOrCreateDeepestMap<K, V, D extends Exclude<SubtractInput, 0>>(
    raw: HighDimensionalMapRaw<K, V, D>,
    keys: KeysOfHighDimensionalMap<K, D>
): Map<K, V> {
    return (function createOrGetDeepestMap(
        keys: KeysOfHighDimensionalMap<K, D>
    ): Map<K, V> {
        const map: Map<K, V> = keys.reduce(
            //@ts-ignore
            (p: Map<K, any>, key) => {
                return getOrCreateMapOfMap<K, ExtractMapValue<typeof p>>(
                    p,
                    key
                );
            },
            raw
        ) as unknown as Map<K, V>;

        return map;
    })(keys);
}

function createKeysValidator<K, D extends Exclude<SubtractInput, 0>>(
    dimension: D,
    keys: KeysOfHighDimensionalMap<K, D>
): asserts keys is KeysOfHighDimensionalMap<K, D> {
    function keysValidator(
        keys: KeysOfHighDimensionalMap<K, D>
    ): asserts keys is KeysOfHighDimensionalMap<K, D> {
        //要求keys当中不能是对象类型的元素
        assert_true(keys.length === dimension, "keys length mismatch");
        assert_true(
            keys.every((k) => {
                return !isObjectOrFunction(k);
            }),
            "keys item must not be an object or function"
        );
    }
    return keysValidator(keys);
}
function getOrCreateMapOfMap<K, V>(p: Map<K, Map<K, V>>, key: K): Map<K, V> {
    if (p.has(key)) {
        const map = p.get(key);

        if (map) {
            return map;
        }
    }
    const created = new Map<K, V>();
    p.set(key, created);
    return created;
}
