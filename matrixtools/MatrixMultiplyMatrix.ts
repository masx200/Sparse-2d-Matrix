// import { dot } from "mathjs";
import { asserttrue } from "../test/asserttrue";
import { dot } from "./dot";
import { Matrix } from "./Matrix";
import { MatrixCreate } from "./MatrixCreate";
import { MatrixGetColumn } from "./MatrixGetColumn";
import { MatrixGetRow } from "./MatrixGetRow";

export function MatrixMultiplyMatrix<
    M extends number,
    P extends number,
    N extends number
>(matrix1: Matrix<M, P>, matrix2: Matrix<P, N>): Matrix<M, N> {
    // asserttrue(dot([3,4],[2,4])===22)
    const row = matrix1.row;
    const column = matrix2.column;
    asserttrue(matrix1.column === matrix2.row);
    const result = MatrixCreate({
        row,
        column,
        initializer: (i, j) =>
            dot(MatrixGetRow(matrix1, i), MatrixGetColumn(matrix2, j)),
    });
    return result;
}
