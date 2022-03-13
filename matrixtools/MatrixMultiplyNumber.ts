import { MatrixMap } from "./MatrixMap";
import { Matrix } from "./Matrix";

export function MatrixMultiplyNumber<R extends number, C extends number>(
    value: number,
    matrix: Matrix<R, C>
): Matrix<R, C> {
    return MatrixMap(matrix, (v) => v * value);
}
