import { MatrixCreate } from "./MatrixCreate";
import { Matrix } from "./Matrix";
/**全一矩阵 */
export function MatrixOfOnes<R extends number, C extends number>({
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
            return 1;
        },
    });
}
