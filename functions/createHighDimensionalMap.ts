import { ExtractMapValue } from "./ExtractMapValue";
import { HighDimensionalMap } from "./HighDimensionalMap";
import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { SubtractInput } from "./SubtractInput";

export function createHighDimensionalMap<K, V, D extends SubtractInput>(
    dimension: D
): HighDimensionalMap<K, V, D> {
    const raw = new Map<
        K,
        ExtractMapValue<HighDimensionalMapRaw<K, V, D>>
    >() as HighDimensionalMapRaw<K, V, D>;
    function clear() {
        raw.clear();
    }
    return { dimension, raw, clear };
}
