import { Matrix } from "./Matrix";

export const MatrixGetRow = (matrix: Matrix, row: number): number[] => {
    return Array(matrix.column)
        .fill(0)
        .map((_v, c) => {
            return matrix.get(row, c);
        });
};
