import { MatrixSymmetryCreate } from "../matrixtools/MatrixSymmetryCreate";
import { assertshouldcatcherror } from "../test/assertshouldcatcherror";

it("MatrixSymmetryCreate_row_zero", () => {
    assertshouldcatcherror(() => {
        MatrixSymmetryCreate({ row: 0 });
    });
});
