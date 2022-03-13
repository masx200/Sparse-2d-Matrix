import { MatrixCreate } from "./MatrixCreate";
import { Matrix } from "./Matrix";
/**单位矩阵 */
export function MatrixOfZeros<R extends number, C extends number>({
    row,
    column,
}: {
    row: R;
    column: C;
}): Matrix<R, C> {
    return MatrixCreate({
        row: row,
        column: column,
        initializer: () => {
            return 0;
        },
    });
}
