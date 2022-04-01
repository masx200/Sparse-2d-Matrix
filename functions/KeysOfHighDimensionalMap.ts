import { ArrayOfLength } from "./ArrayOfLength";
import { SubtractInput } from "./SubtractInput";

export type KeysOfHighDimensionalMap<
    K,
    D extends SubtractInput
> = ArrayOfLength<K, D>;
