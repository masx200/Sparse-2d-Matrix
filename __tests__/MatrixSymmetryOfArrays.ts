import { MatrixSymmetryOfArrays } from "../matrixtools/MatrixSymmetryOfArrays";
import assert from "assert";
it("MatrixSymmetryOfArrays", () => {
    const matrix1 = MatrixSymmetryOfArrays([[1]]);
    assert.equal(matrix1.get(0, 0), 1);

    const matrix2 = MatrixSymmetryOfArrays([
        [1, 2],
        [2, 1],
    ]);
    assert.equal(matrix2.get(0, 0), 1);
    assert.equal(matrix2.get(1, 1), 1);
    assert.equal(matrix2.get(0, 1), 2);
    assert.equal(matrix2.get(1, 0), 2);

    matrix2.fill(3);
    assert.deepEqual(matrix2.values(), [3, 3, 3, 3]);
    matrix2.fill(0);
    assert.deepEqual(matrix2.values(), [0, 0, 0, 0]);
});
