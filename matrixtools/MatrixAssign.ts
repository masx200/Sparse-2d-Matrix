import { asserttrue } from "../test/asserttrue";
import { MatrixForEach } from "./MatrixForEach";
import { Matrix } from "./Matrix";

export function MatrixAssign<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    matrix2: Matrix<R, C>
): void {
    const { row, column } = matrix1;
    asserttrue(matrix2.row === row && matrix2.column === column);
    MatrixForEach(matrix2, (v, i, j) => {
        matrix1.set(i, j, v);
    });
}
