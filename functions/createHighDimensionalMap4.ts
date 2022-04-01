import { createHighDimensionalMap } from "./createHighDimensionalMap";
import { HighDimensionalMap } from "./HighDimensionalMap";
// import {
//     HighDimensionalMap4,
//     HighDimensionalMapRaw4,
// } from "./High-dimensional-Map";

export function createHighDimensionalMap4<K, V>(): HighDimensionalMap<K, V, 4> {
    return createHighDimensionalMap<K, V, 4>(4);
}
