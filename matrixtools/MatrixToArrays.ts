import { Matrix } from "./Matrix";

export function MatrixToArrays(matrix: Matrix): number[][] {
    const { row, column } = matrix;

    return Array(row)
        .fill([])
        .map((_v, r) => {
            return Array(column)
                .fill(0)
                .map((_v, c) => {
                    return matrix.get(r, c);
                });
        });
}
