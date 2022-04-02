import { assert_true } from "../test/assert_true";
import { Matrix } from "./Matrix";
import { MatrixCreate } from "./MatrixCreate";

export function MatrixOfArrays(arrays: number[][]): Matrix {
    const row = arrays.length;
    const column = arrays[0]?.length;

    assert_true(row > 0 && column > 0, "row and column should greater than 0");

    return MatrixCreate({
        row,
        column,
        initializer: (i, j) => arrays[i]?.[j],
    });
}
