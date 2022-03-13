import { Matrix } from "./Matrix";

export function assertMatrixRowColumn<R extends number, C extends number>(
    matrix: Matrix<number, number>,
    row: R,
    column: C
): asserts matrix is Matrix<R, C> {
    if (matrix.column !== column || matrix.row !== row) {
        throw Error("assert error Matrix row column," + row + "," + column);
    }
}
