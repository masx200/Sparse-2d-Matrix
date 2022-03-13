import { asserttrue } from "../test/asserttrue";
import { Matrix } from "./Matrix";
import { MatrixReduceSeries } from "./MatrixReduceSeries";

export function MatrixMin<R extends number, C extends number>(
    matrix1: Matrix<R, C>,
    ...matrixs: Matrix<R, C>[]
) {
    asserttrue(matrixs.length, "invalid arguments matrixs");
    return MatrixReduceSeries(
        (previousValue: number, currentValue: number) => {
            return Math.min(previousValue, currentValue);
        },
        matrix1,
        ...matrixs
    );
}
