import { MatrixCreate } from "./MatrixCreate";
import { Matrix } from "./Matrix";
const keysofmatrix = Reflect.ownKeys(MatrixCreate({ row: 1, column: 1 }));
export function isMatrix(matrix: any): matrix is Matrix<number, number> {
    return keysofmatrix.every((key) => {
        return Reflect.has(matrix, key);
    });
}
