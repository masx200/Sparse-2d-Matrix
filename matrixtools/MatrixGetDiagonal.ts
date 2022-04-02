import { assert_true } from "../test/assert_true";
import { Matrix } from "./Matrix";

export function MatrixGetDiagonal(input: Matrix<number, number>): number[] {
    assert_true(input.row > 0);
    const length = Math.min(input.row, input.column);
    return Array(length)
        .fill(0)
        .map((_v, i) => input.get(i, i));
}
