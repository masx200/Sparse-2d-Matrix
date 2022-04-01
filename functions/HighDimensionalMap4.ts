import { HighDimensionalMap } from "./HighDimensionalMap";

// declare let a: HighDimensionalMapRaw4<number, number>;
//Map<K, Map<K, Map<K, Map<K, V>>>>;
export type HighDimensionalMap4<K, V> = HighDimensionalMap<
    K,
    V,
    4
>; /* Map<KeysOfHighDimensionalMap4<K>, V> & {*/
