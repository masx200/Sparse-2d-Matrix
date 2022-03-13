import { MatrixSymmetry } from "./MatrixSymmetry";
import { MatrixSymmetryCreate } from "./MatrixSymmetryCreate";
const tempmatrix = MatrixSymmetryCreate({ row: 1 });
const keysofmatrix = Reflect.ownKeys(tempmatrix);
export function isMatrixSymmetry(
    matrix: any
): matrix is MatrixSymmetry<number> {
    if (typeof matrix !== "object") {
        return false;
    }
    return keysofmatrix.every((key) => {
        return (
            Reflect.has(matrix, key) &&
            typeof Reflect.get(matrix, key) ===
                typeof Reflect.get(tempmatrix, key)
        );
    });
}
