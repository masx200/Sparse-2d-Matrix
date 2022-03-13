import { matrixkeyiterator } from "./matrixkeyiterator";
import { Matrix } from "./Matrix";

export function MatrixForEach<R extends number, C extends number>(
    matrix: Matrix<R, C>,
    callback: (value: number, row: number, column: number) => void
): void {
    const { row, column } = matrix;
    for (let [i, j] of matrixkeyiterator(row, column)) {
        const value = matrix.get(i, j);
        callback(value, i, j);
    }
}
