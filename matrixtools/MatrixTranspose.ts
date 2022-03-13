import { MatrixCreate } from "./MatrixCreate";
import { Matrix } from "./Matrix";

export function MatrixTranspose<R extends number, C extends number>(
    matrix: Matrix<R, C>
): Matrix<C, R> {
    const { row: column, column: row } = matrix;
    return MatrixCreate<C, R>({
        row: row,
        column: column,
        initializer: (i, j) => {
            return matrix.get(j, i);
        },
    });
}
