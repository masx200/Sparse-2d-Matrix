import { Matrix } from "./Matrix";

export function MatrixReduceSingle<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    callback: (
        previousValue: number,
        currentValue: number,
        row: number,
        column: number
    ) => number,

    initialValue?: number
): number {
    return matrix1
        .entries()
        .reduce((previousValue: number, [row, column, value]) => {
            return callback(previousValue, value, row, column);
        }, initialValue ?? 0);
}
