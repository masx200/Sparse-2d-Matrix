export type HighDimensionalMapRaw4<K, V> = Map<K, Map<K, Map<K, Map<K, V>>>>;
export type HighDimensionalMap4<K, V> = Map<KeysOfHighDimensionalMap4<K>, V> & {
    raw: HighDimensionalMapRaw4<K, V>;
};

// export function createHighDimensionalMap4<K, V>(): HighDimensionalMap4<K, V> {}
//
export type KeysOfHighDimensionalMap4<K> = [K, K, K, K];
export type ArrayOfLength<T, L extends number> = ArrayOfLengthPickNumber<
    T,
    L
> & { length: L };
export type SubtractOne<D extends number> = [
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
][D];
declare let aaa: KeysOfHighDimensionalMap4<number>;
declare let bbb: ArrayOfLength<number, 4>;

/* 不能将类型“ArrayOfLength<number, 4>”分配给类型“KeysOfHighDimensionalMap4<number>”。ts(2322) */
// aaa = bbb;

//
bbb = aaa;
aaa = [1, 2, 3, 45];
bbb = [1, 2, 3, 45];

//
export type ArrayOfLengthPickNumber<T, L extends number> = L extends 0
    ? {}
    : L extends 1
    ? {
          0: T;
      }
    : ArrayOfLengthPickNumber<T, SubtractOne<L>> & Record<SubtractOne<L>, T>;
