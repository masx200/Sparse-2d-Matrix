// import { HighDimensionalMapRaw } from "./HighDimensionalMapRaw";
import { KeysOfHighDimensionalMap } from "./KeysOfHighDimensionalMap";
import { SubtractInput } from "./SubtractInput";
// export const raw_symbol = Symbol();
export const HighDimensional_symbol = Symbol();
export type HighDimensionalMap<K, V, D extends SubtractInput> = Map<
    KeysOfHighDimensionalMap<K, D>,
    V
> & {
    dimension: D;
    // [raw_symbol]: HighDimensionalMapRaw<K, V, D>;
    [HighDimensional_symbol]: true;
    set(
        key: KeysOfHighDimensionalMap<K, D>,
        value: V
    ): HighDimensionalMap<K, V, D>;
};
