import { MatrixSymbol } from "./MatrixSymbol";

/* 稀疏二维矩阵 非对称式*/
export type Matrix<R extends number = number, C extends number = number> = {
    forEach(
        callback: (value: number, row: number, column: number) => void
    ): void;
    /**  转换成arrays输出 */
    [Symbol.iterator](): IterableIterator<number[]>;
    /**  转换成arrays输出 */
    toJSON: () => number[][];
    values: () => number[];
    keys: () => [number, number][];
    entries: () => [number, number, number][];
    /**get函数不可以输入负数 */
    get: (row: number, column: number) => number;
    /**at函数可以输入负数 */
    at: (row: number, column: number) => number;
    set: (row: number, column: number, value: number) => void;
    [Symbol.toStringTag]: string;

    has: (row: number, column: number) => boolean;
    fill: (value: number) => void;
} & { row: R; column: C } & { [MatrixSymbol]: true };
