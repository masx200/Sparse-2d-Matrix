import { assert_true } from "../test/assert_true";
import { Matrix } from "./Matrix";
import { MatrixCreate } from "./MatrixCreate";

export function MatrixOfDiagonal(diag: number[]): Matrix<number, number> {
    assert_true(diag.length > 0);
    return MatrixCreate({
        row: diag.length,
        column: diag.length,
        initializer: (i, j) => {
            return i === j ? diag[i] : 0;
        },
    });
}
