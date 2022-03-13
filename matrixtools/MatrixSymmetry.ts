import { Matrix } from "./Matrix";

/* 稀疏二维矩阵 对称式*/
export type MatrixSymmetry<R extends number = number> = Matrix<R, R> & {
    symmetry: true;
};
