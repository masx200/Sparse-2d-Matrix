import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { KeysOfHighDimensionalMap } from "./KeysOfHighDimensionalMap";
import { SubtractInput } from "./SubtractInput";

export type HighDimensionalMap<K, V, D extends SubtractInput> = Map<
    KeysOfHighDimensionalMap<K, D>,
    V
> & { dimension: D; raw: HighDimensionalMapRaw<K, V, D> };
