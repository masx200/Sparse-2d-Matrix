import { ArrayOfLength } from "./ArrayOfLength";

export type HighDimensionalMapRaw4<K, V> = Map<K, Map<K, Map<K, Map<K, V>>>>;
export type HighDimensionalMap4<K, V> = Map<KeysOfHighDimensionalMap4<K>, V> & {
    raw: HighDimensionalMapRaw4<K, V>;
};

// export function createHighDimensionalMap4<K, V>(): HighDimensionalMap4<K, V> {
//     const raw: HighDimensionalMapRaw4<K, V> = new Map();
//     return { raw };
// }
//
export type KeysOfHighDimensionalMap4<K> = ArrayOfLength<K, 4>;

