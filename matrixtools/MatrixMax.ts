import { asserttrue } from "../test/asserttrue";
import { MatrixMap } from "./MatrixMap";
import { Matrix } from "./Matrix";

export function MatrixMax<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    ...matrixs: Matrix<R, C>[]
) {
    asserttrue(matrixs.length, "invalid arguments matrixs");
    const { row, column } = matrix1;
    asserttrue(
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
