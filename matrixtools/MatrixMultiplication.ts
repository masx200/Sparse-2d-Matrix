import { assertnumber } from "../test/assertnumber";
import { Matrix } from "./Matrix";
import { MatrixMultiplyMatrix } from "./MatrixMultiplyMatrix";
import { assertMatrixRowColumn } from "./assertMatrixRowColumn";
import { assert_true } from "../test/assert_true";

export function MatrixMultiplication<M extends number, N extends number>(
    matrix1: Matrix<M, number>,
    ...matrixs: [...Matrix[], Matrix<number, N>]
): Matrix<M, N> {
    assert_true(matrixs.length, "invalid arguments matrixs");
    const row = matrix1.row;
    const column = matrixs.at(-1)?.column;
    assertnumber(column);
    const result: Matrix<number, number> = matrixs.reduce(
        (previous, current) => {
            return MatrixMultiplyMatrix(previous, current);
        },
        matrix1
    );
    assertMatrixRowColumn(result, row, column as N);

    return result;
}
