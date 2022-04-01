import { SubtractInput } from "./SubtractInput";
import { SubtractOne } from "./SubtractOne";

// declare let aaa: KeysOfHighDimensionalMap4<number>;
// declare let bbb: ArrayOfLength<number, 4>;
// let three: SubtractOne<-4> = 3;
// aaa = bbb;
// //
// bbb = aaa;
// aaa = [1, 2, 3, 45];
// bbb = [1, 2, 3, 45];

export type ArrayOfLengthPickNumber<T, L extends SubtractInput> = L extends 0
    ? {}
    : L extends 1
    ? Record<0, T>
    : ArrayOfLengthPickNumber<T, Exclude<SubtractOne<L>, -1>> &
          Record<SubtractOne<L>, T>;
