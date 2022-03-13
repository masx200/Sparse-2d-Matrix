import { MatrixCreate } from "./MatrixCreate";
import { Matrix } from "./Matrix";

export function MatrixFrom<R extends number, C extends number>(
    matrix: Matrix<R, C>
): Matrix<R, C> {
    const { row, column } = matrix;

    const obj = MatrixCreate({
        row,
        column,
        initializer(i, j) {
            return matrix.get(i, j);
        },
    });
    return obj;
}
