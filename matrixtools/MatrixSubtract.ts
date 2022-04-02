import { assert_true } from "../test/assert_true";
import { MatrixMap } from "./MatrixMap";
import { Matrix } from "./Matrix";

export function MatrixSubtract<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    matrix2: Matrix<R, C>
) {
    const { row, column } = matrix1;
    assert_true(matrix2.row === row && matrix2.column === column);
    return MatrixMap(matrix1, (v, i, j) => {
        return v - matrix2.get(i, j);
    });
}
