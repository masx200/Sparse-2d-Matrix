import { MatrixCreate } from "../matrixtools/MatrixCreate";
import { MatrixSymmetryCreate } from "../matrixtools/MatrixSymmetryCreate";

it("Map maximum size exceeded", () => {
    const scale = 4097;
    const ms1 = MatrixSymmetryCreate({ row: scale, initializer: () => 1 });
    const ms2 = MatrixCreate({
        row: scale,
        column: scale,
        initializer: () => 1,
    });
    console.log(ms1, ms2);
    expect(ms1.get(2, 57)).toBe(1);
    expect(ms2.get(32, 7)).toBe(1);
    expect(ms1.get(4096, 4096)).toBe(1);
    expect(ms2.get(4096, 4096)).toBe(1);
});
