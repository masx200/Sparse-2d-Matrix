import { Matrix } from "./Matrix";
import { MatrixGetDiagonal } from "./MatrixGetDiagonal";
import { sum } from "./sum";

export function MatrixTrace<R extends number, C extends number>(
    matrix: Matrix<R, C>
): number {
    return sum(MatrixGetDiagonal(matrix));
}
