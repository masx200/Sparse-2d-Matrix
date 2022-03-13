import { asserttrue } from "../test/asserttrue";
import { Matrix } from "./Matrix";

export function MatrixGetDiagonal(input: Matrix<number, number>): number[] {
    asserttrue(input.row > 0);
    const length = Math.min(input.row, input.column);
    return Array(length)
        .fill(0)
        .map((_v, i) => input.get(i, i));
}
