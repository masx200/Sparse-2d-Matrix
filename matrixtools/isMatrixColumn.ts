import { Matrix } from "./Matrix";

export function isMatrixColumn<C extends number>(
    matrix: Matrix<number, number>,
    column: C
): matrix is Matrix<number, C> {
    return matrix.column === column;
}
