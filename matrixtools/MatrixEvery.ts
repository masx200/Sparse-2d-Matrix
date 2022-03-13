import { Matrix } from "./Matrix";

export function MatrixEvery<R extends number, C extends number>(
    matrix: Matrix<R, C>,
    callback: (value: number, row: number, column: number) => boolean
): boolean {
    return Array.from(matrix.entries()).every(([i, j, v]) => {
        return callback(v, i, j);
    });
}
