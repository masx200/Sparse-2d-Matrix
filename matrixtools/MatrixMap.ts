import { MatrixForEach } from "./MatrixForEach";
import { MatrixFrom } from "./MatrixFrom";
import { Matrix } from "./Matrix";

export function MatrixMap<R extends number, C extends number>(
    matrix: Matrix<R, C>,
    callback: (value: number, row: number, column: number) => number
): Matrix<R, C> {
    const result = MatrixFrom(matrix);
    MatrixForEach(matrix, (v, i, j) => {
        const value = callback(v, i, j);
        result.set(i, j, value);
    });
    return result;
}
