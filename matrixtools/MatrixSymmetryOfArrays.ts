import { assert_true } from "../test/assert_true";
import { MatrixSymmetry } from "./MatrixSymmetry";
import { MatrixSymmetryCreate } from "./MatrixSymmetryCreate";

export function MatrixSymmetryOfArrays(arrays: number[][]): MatrixSymmetry {
    const row = arrays.length;
    const column = arrays[0]?.length;

    assert_true(row > 0 && column > 0, "row and column should greater than 0");
    assert_true(row === column, "Symmetry Matrix , row, column should equal");
    return MatrixSymmetryCreate({
        row,

        initializer: (i, j) => arrays[i]?.[j],
    });
}
