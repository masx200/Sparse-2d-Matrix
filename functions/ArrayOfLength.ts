import { ArrayOfLengthPickNumber } from "./ArrayOfLengthPickNumber";
import { SubtractInput } from "./SubtractInput";

// export type ArrayOfLength<T, L extends number> = T[] &
//     (L extends 0
//         ? []
//         : L extends 1
//         ? [T]
//         : FlatArray<[ArrayOfLength<T, SubtractOne<L>>, [T]], 1>);
export type ArrayOfLength<T, L extends SubtractInput> = T[] &
    ArrayOfLengthPickNumber<T, L> & { length: L };
