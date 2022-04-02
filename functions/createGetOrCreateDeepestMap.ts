import { ExtractMapValue } from "./ExtractMapValue";
import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { KeysOfHighDimensionalMap } from "./KeysOfHighDimensionalMap";
import { SubtractInput } from "./SubtractInput";
import { getOrCreateMapOfMap } from "./getOrCreateMapOfMap";

export function createGetOrCreateDeepestMap<
    K,
    V,
    D extends Exclude<SubtractInput, 0>
>(
    raw: HighDimensionalMapRaw<K, V, D>,
    keys: KeysOfHighDimensionalMap<K, D>
): Map<K, V> {
    return (function createOrGetDeepestMap(
        keys: KeysOfHighDimensionalMap<K, D>
    ): Map<K, V> {
        const map: Map<K, V> = keys.slice(0, -1).reduce(
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
