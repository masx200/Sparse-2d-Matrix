import { Matrix } from "./Matrix";

export function assertMatrixColumn<C extends number>(
    matrix: Matrix<number, number>,
    column: C
): asserts matrix is Matrix<number, C> {
    if (matrix.column !== column) {
        throw Error("assert error Matrix column," + column);
    }
}
