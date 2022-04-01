import { SubtractInput } from "./SubtractInput";
import { SubtractOne } from "./SubtractOne";

export type HighDimensionalMapRaw<K, V, D extends SubtractInput> = D extends 0
    ? never
    : D extends 1
    ? Map<K, V>
    : HighDimensionalMapRaw<K, Map<K, V>, Exclude<SubtractOne<D>, -1>>;
