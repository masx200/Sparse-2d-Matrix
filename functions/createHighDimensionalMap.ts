import { HighDimensionalMap } from "./HighDimensionalMap";
import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { SubtractInput } from "./SubtractInput";

export function createHighDimensionalMap<K, V, D extends SubtractInput>(
    dimension: D
): HighDimensionalMap<K, V, D> {
    const raw: HighDimensionalMapRaw<K, V, D> =
        new Map() as HighDimensionalMapRaw<K, V, D>;
    
    return { dimension, raw };
}
