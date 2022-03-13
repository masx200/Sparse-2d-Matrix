import { MatrixSymmetry } from "./MatrixSymmetry";
import { MatrixSymmetryCreate } from "./MatrixSymmetryCreate";
const keysofmatrix = Reflect.ownKeys(MatrixSymmetryCreate({ row: 1 }));
export function isMatrixSymmetry(
    matrix: any
): matrix is MatrixSymmetry<number> {
    return keysofmatrix.every((key) => {
        return Reflect.has(matrix, key);
    });
}
