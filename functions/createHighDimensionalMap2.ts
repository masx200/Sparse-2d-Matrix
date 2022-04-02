import { createHighDimensionalMap } from "./createHighDimensionalMap";
import { HighDimensionalMap } from "./HighDimensionalMap";
// import {
//     HighDimensionalMap4,
//     HighDimensionalMapRaw4,
// } from "./High-dimensional-Map";

export function createHighDimensionalMap2<K, V>(): HighDimensionalMap<K, V, 2> {
    return createHighDimensionalMap<K, V, 2>(2);
}
