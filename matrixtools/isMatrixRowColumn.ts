import { Matrix } from "./Matrix";

export function isMatrixRowColumn<R extends number, C extends number>(
    matrix: Matrix<number, number>,
    row: R,
    column: C
): matrix is Matrix<R, C> {
    if (matrix.column !== column || matrix.row !== row) {
        return false;
    } else {
        return true;
    }
}
