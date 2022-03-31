// import { matrixkeyiterator } from "./matrixkeyiterator";
import { Matrix } from "./Matrix";
/**矩阵所有元素填充 */
export function MatrixFill<R extends number, C extends number>(
    matrix: Matrix<R, C>,
    value: number
): void {
    matrix.keys().forEach(([r, c]) => {
        matrix.set(r, c, value);
    });
    // const { row, column } = matrix;

    // for (let [i, j] of matrixkeyiterator(row, column)) {
    //     // console.log({ i, j });
    //     matrix.set(i, j, value);
    // }
}
