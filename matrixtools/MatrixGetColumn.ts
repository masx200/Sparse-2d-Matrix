import { Matrix } from "./Matrix";

export const MatrixGetColumn = (matrix: Matrix, column: number): number[] => {
    return Array(matrix.row)
        .fill(0)
        .map((_v, r) => {
            return matrix.get(r, column);
        });
};
