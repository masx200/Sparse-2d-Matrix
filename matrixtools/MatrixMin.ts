import { assert_true } from "../test/assert_true";
import { Matrix } from "./Matrix";
import { MatrixReduceSeries } from "./MatrixReduceSeries";

export function MatrixMin<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    ...matrixs: Matrix<R, C>[]
) {
    assert_true(matrixs.length, "invalid arguments matrixs");
    return MatrixReduceSeries(
        (previousValue: number, currentValue: number) => {
            return Math.min(previousValue, currentValue);
        },
        matrix1,
        ...matrixs
    );
}
