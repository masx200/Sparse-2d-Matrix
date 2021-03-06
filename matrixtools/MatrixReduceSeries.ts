import { assert_true } from "../test/assert_true";
import { Matrix } from "./Matrix";
import { MatrixMap } from "./MatrixMap";

export function MatrixReduceSeries<R extends number, C extends number>(
    callback: (
        previousValue: number,
        currentValue: number,
        row: number,
        column: number,
        previousMatrix: Matrix<R, C>,
        currentMatrix: Matrix<R, C>
    ) => number,
    matrix1: Matrix<R, C>,
    ...matrixs: Matrix<R, C>[]
): Matrix<R, C> {
    assert_true(matrixs.length, "invalid arguments matrixs");
    const { row, column } = matrix1;
    assert_true(
        matrixs.every((m) => {
            return m.row === row && m.column === column;
        })
    );
    return matrixs.reduce((previousmatrix, m) => {
        return MatrixMap(previousmatrix, (previousvalue, i, j) => {
            return callback(
                previousvalue,
                m.get(i, j),
                i,
                j,
                previousmatrix,
                m
            );
        });
    }, matrix1);
}
