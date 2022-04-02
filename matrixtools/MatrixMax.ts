import { assert_true } from "../test/assert_true";
import { MatrixMap } from "./MatrixMap";
import { Matrix } from "./Matrix";

export function MatrixMax<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    ...matrixs: Matrix<R, C>[]
) {
    assert_true(matrixs.length, "invalid arguments matrixs");
    const { row, column } = matrix1;
    assert_true(
        matrixs.every((m) => {
            return m.row === row && m.column === column;
        })
    );
    return matrixs.reduce((a, m) => {
        return MatrixMap(a, (v, i, j) => {
            return Math.max(v, m.get(i, j));
        });
    }, matrix1);
}
