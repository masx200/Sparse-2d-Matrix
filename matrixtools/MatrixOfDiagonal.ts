import { asserttrue } from "../test/asserttrue";
import { Matrix } from "./Matrix";
import { MatrixCreate } from "./MatrixCreate";

export function MatrixOfDiagonal(diag: number[]): Matrix<number, number> {
    asserttrue(diag.length > 0);
    return MatrixCreate({
        row: diag.length,
        column: diag.length,
        initializer: (i, j) => {
            return i === j ? diag[i] : 0;
        },
    });
}
