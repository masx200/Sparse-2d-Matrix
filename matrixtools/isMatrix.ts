import { MatrixCreate } from "./MatrixCreate";
import { Matrix } from "./Matrix";
const tempmatrix = MatrixCreate({ row: 1, column: 1 });
const keysofmatrix = Reflect.ownKeys(tempmatrix);
export function isMatrix(matrix: any): matrix is Matrix<number, number> {
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
