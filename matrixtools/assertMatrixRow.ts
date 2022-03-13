import { Matrix } from "./Matrix";

export function assertMatrixRow<R extends number>(
    matrix: Matrix<number, number>,
    row: R
): asserts matrix is Matrix<R, number> {
    if (matrix.row !== row) {
        throw Error("assert error MatrixRow," + row);
    }
}
