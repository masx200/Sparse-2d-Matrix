import { Matrix } from "./Matrix";

export function isMatrixRow<R extends number>(
    matrix: Matrix<number, number>,
    row: R
): matrix is Matrix<R, number> {
    return matrix.row === row;
}
