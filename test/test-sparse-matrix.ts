import { isEqual } from "lodash";
import { assertMatrixRowColumn } from "../matrixtools/assertMatrixRowColumn";
import { isMatrix } from "../matrixtools/isMatrix";
import { MatrixAdd } from "../matrixtools/MatrixAdd";
import { MatrixAssign } from "../matrixtools/MatrixAssign";
import { MatrixCreate } from "../matrixtools/MatrixCreate";
import { MatrixEquals } from "../matrixtools/MatrixEquals";
import { MatrixEvery } from "../matrixtools/MatrixEvery";
import { MatrixFill } from "../matrixtools/MatrixFill";
import { MatrixFrom } from "../matrixtools/MatrixFrom";
import { MatrixGetColumn } from "../matrixtools/MatrixGetColumn";
import { MatrixGetRow } from "../matrixtools/MatrixGetRow";
import { MatrixIdentity } from "../matrixtools/MatrixIdentity";
import { MatrixMax } from "../matrixtools/MatrixMax";
import { MatrixMin } from "../matrixtools/MatrixMin";
import { MatrixMultiplication } from "../matrixtools/MatrixMultiplication";
import { MatrixMultiplyNumber } from "../matrixtools/MatrixMultiplyNumber";
import { MatrixOfArrays } from "../matrixtools/MatrixOfArrays";
import { MatrixOfOnes } from "../matrixtools/MatrixOfOnes";
import { MatrixOfZeros } from "../matrixtools/MatrixOfZeros";
import { MatrixSome } from "../matrixtools/MatrixSome";
import { MatrixSubtract } from "../matrixtools/MatrixSubtract";
import { MatrixToArrays } from "../matrixtools/MatrixToArrays";
import { MatrixTranspose } from "../matrixtools/MatrixTranspose";
import {
    isMatrixSymmetry,
    MatrixGetDiagonal,
    MatrixOfDiagonal,
    MatrixSymmetryCreate,
    MatrixTrace,
} from "../src/index";
import { assertshouldcatcherror } from "./assertshouldcatcherror";
import { asserttrue } from "./asserttrue";

export function testMatrix() {
    console.log("test Matrix start");
    asserttrue(!isMatrixSymmetry([]));
    asserttrue(!isMatrixSymmetry({}));
    asserttrue(!isMatrixSymmetry(1));
    asserttrue(!isMatrix(false));
    asserttrue(isMatrix(MatrixSymmetryCreate({ row: 1 })));

    asserttrue(isMatrixSymmetry(MatrixSymmetryCreate({ row: 1 })));
    const matrix3 = MatrixCreate({
        row: 3,
        column: 2,
        initializer: (i, j) => i + j,
    });
    asserttrue(matrix3.has(0, 0));
    asserttrue(matrix3.has(2, 1));
    asserttrue(!matrix3.has(10, 0));
    asserttrue(!matrix3.has(10, 100));
    assertshouldcatcherror(() => {
        MatrixOfArrays([]);
    });
    const matrix1 = MatrixOfArrays([
        [1, 2],
        [3, 4],
    ]);
    console.log(matrix1);
    console.log("entries", matrix1.entries());
    asserttrue(
        isEqual(
            [
                [0, 0, 1],
                [0, 1, 2],
                [1, 0, 3],
                [1, 1, 4],
            ],
            matrix1.entries()
        )
    );
    asserttrue(isMatrix(matrix1));
    asserttrue(!isMatrix([]));
    asserttrue(matrix1.at(-1, -1) === 4);
    const arrays = MatrixToArrays(matrix1);
    console.log("arrays:", arrays);
    asserttrue(
        isEqual(arrays, [
            [1, 2],
            [3, 4],
        ])
    );

    assertshouldcatcherror(() => {
        MatrixAdd(
            MatrixOfArrays([
                [1, 0],
                [0, 1],
            ])
        );
    });
    asserttrue(
        isEqual(
            [
                [4, 3],
                [3, 4],
            ],
            MatrixToArrays(
                MatrixAdd(
                    MatrixOfArrays([
                        [1, 0],
                        [0, 1],
                    ]),
                    MatrixCreate({
                        row: 2,
                        column: 2,
                        initializer: () => 3,
                    })
                )
            )
        )
    );
    asserttrue(
        isEqual(
            [
                [4, 4],
                [4, 4],
            ],
            MatrixToArrays(
                MatrixAdd(
                    MatrixOfArrays([
                        [1, 0],
                        [0, 1],
                    ]),
                    MatrixCreate({
                        row: 2,
                        column: 2,
                        initializer: () => 3,
                    }),
                    MatrixOfArrays([
                        [0, 1],
                        [1, 0],
                    ])
                )
            )
        )
    );

    console.log(MatrixCreate({ row: 1, column: 1 }));
    assertMatrixRowColumn(MatrixCreate({ row: 1, column: 1 }), 1, 1);
    assertMatrixRowColumn(MatrixCreate({ row: 2, column: 3 }), 2, 3);
    assertshouldcatcherror(() => {
        assertMatrixRowColumn(MatrixCreate({ row: 3, column: 3 }), 2, 3);
    });
    const matrix2 = MatrixOfArrays([
        [1, 2],
        [3, 4],
        [3, 4],
    ]);
    asserttrue(
        isEqual(matrix2.entries(), [
            [0, 0, 1],
            [0, 1, 2],
            [1, 0, 3],
            [1, 1, 4],
            [2, 0, 3],
            [2, 1, 4],
        ])
    );
    console.log(matrix2);
    console.log(matrix2.entries());
    MatrixAssign(
        matrix2,
        MatrixCreate({ row: 3, column: 2, initializer: (i, j) => i + j })
    );
    console.log(matrix2.entries());
    console.log(matrix3.entries());
    console.log(MatrixToArrays(matrix2), MatrixToArrays(matrix3));
    asserttrue(isEqual(MatrixToArrays(matrix2), MatrixToArrays(matrix3)));
    asserttrue(MatrixEquals(matrix2, matrix3));
    asserttrue(MatrixEquals(matrix2, MatrixFrom(matrix3), matrix3));
    asserttrue(!MatrixEquals(MatrixFrom(matrix3), MatrixTranspose(matrix3)));
    console.log(MatrixTranspose(matrix3));
    console.log(MatrixTranspose(matrix3).entries());
    asserttrue(
        isEqual(
            [
                [0, 0, 0],
                [0, 1, 1],
                [0, 2, 2],
                [1, 0, 1],
                [1, 1, 2],
                [1, 2, 3],
            ],
            MatrixTranspose(matrix3).entries()
        )
    );
    const matrix4 = MatrixCreate({
        row: 3,
        column: 2,
        initializer: (i, j) => i * j,
    });
    console.log(MatrixToArrays(matrix4));
    asserttrue(
        isEqual(
            [
                [0, 0],
                [0, 1],
                [0, 2],
            ],
            MatrixToArrays(matrix4)
        )
    );
    MatrixFill(matrix4, 9);
    console.log(MatrixToArrays(matrix4));
    asserttrue(
        isEqual(
            [
                [9, 9],
                [9, 9],
                [9, 9],
            ],
            MatrixToArrays(matrix4)
        )
    );
    asserttrue(MatrixFrom(matrix3) != matrix3);
    asserttrue(MatrixEquals(MatrixFrom(matrix3), matrix3));
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [1, 1],
                [1, 1],
            ]),
            MatrixMax(
                MatrixOfArrays([
                    [1, 0],
                    [0, 1],
                ]),
                MatrixOfArrays([
                    [0, 1],
                    [1, 0],
                ])
            )
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [0, 0],
                [0, 0],
            ]),
            MatrixMin(
                MatrixOfArrays([
                    [1, 0],
                    [0, 1],
                ]),
                MatrixOfArrays([
                    [0, 1],
                    [1, 0],
                ])
            )
        )
    );
    asserttrue(
        MatrixEvery(
            MatrixOfArrays([
                [0, 0],
                [0, 0],
            ]),
            (v) => v === 0
        )
    );
    asserttrue(
        MatrixSome(
            MatrixOfArrays([
                [0, 1],
                [0, 0],
            ]),
            (v) => v === 1
        )
    );

    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [1, -1],
                [-1, 1],
            ]),
            MatrixSubtract(
                MatrixOfArrays([
                    [1, 0],
                    [0, 1],
                ]),
                MatrixOfArrays([
                    [0, 1],
                    [1, 0],
                ])
            )
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [3, 0],
                [0, 3],
            ]),
            MatrixMultiplyNumber(
                3,
                MatrixOfArrays([
                    [1, 0],
                    [0, 1],
                ])
            )
        )
    );

    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [6, 0],
                [0, 6],
            ]),
            MatrixMultiplication(
                MatrixOfArrays([
                    [3, 0],
                    [0, 3],
                ]),
                MatrixOfArrays([
                    [1, 0],
                    [0, 1],
                ]),
                MatrixOfArrays([
                    [2, 0],
                    [0, 2],
                ])
            )
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [1, 0],
                [0, 1],
            ]),
            MatrixIdentity({ row: 2, column: 2 })
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [0, 0],
                [0, 0],
            ]),
            MatrixOfZeros({ row: 2, column: 2 })
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [1, 1, 1],
                [1, 1, 1],
            ]),
            MatrixOfOnes({ row: 2, column: 3 })
        )
    );
    console.log(
        MatrixToArrays(
            MatrixMultiplication(
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ]),
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ])
            )
        )
    );
    asserttrue(
        isEqual(
            [1, 2],
            MatrixGetRow(
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ]),
                0
            )
        )
    );
    asserttrue(
        isEqual(
            [1, 3],
            MatrixGetColumn(
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ]),
                0
            )
        ),
        "MatrixGetColumn"
    );
    asserttrue(
        MatrixEquals(
            MatrixMultiplication(
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ]),
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ])
            ),
            MatrixOfArrays([
                [7, 10],
                [15, 22],
            ])
        )
    );
    console.log(
        MatrixToArrays(
            MatrixMultiplication(
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ]),
                MatrixOfArrays([
                    [1, 2],
                    [3, 4],
                ])
            )
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [3, 3],
                [3, 3],
            ]),
            MatrixMax(
                MatrixOfArrays([
                    [1, 0],
                    [0, 3],
                ]),
                MatrixOfArrays([
                    [3, 3],
                    [3, 0],
                ])
            )
        )
    );

    asserttrue(
        6 ===
            MatrixTrace(
                MatrixOfArrays([
                    [3, 3],
                    [3, 3],
                ])
            )
    );
    asserttrue(
        isEqual(
            [3, 6],
            MatrixGetDiagonal(
                MatrixOfArrays([
                    [3, 3],
                    [3, 6],
                ])
            )
        )
    );
    asserttrue(
        MatrixEquals(
            MatrixOfArrays([
                [3, 0],
                [0, 6],
            ]),
            MatrixOfDiagonal([3, 6])
        )
    );
    console.log("test Matrix end");
}
