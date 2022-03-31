import { MatrixFill } from "../matrixtools/MatrixFill";
import { MatrixSymmetryCreate } from "../matrixtools/MatrixSymmetryCreate";

it("main test fill", () => {
    const ms1 = MatrixSymmetryCreate({ row: 10 });

    expect(ms1.values().length).toBe(10 * 10);
    expect(ms1.keys().length).toBe(10 * 10);
    expect(ms1.values().every((x) => x === 0)).toBeTruthy();
    expect(ms1.keys().every(([r, c]) => ms1.has(r, c))).toBeTruthy();
    MatrixFill(ms1, 1 / 10000);
    console.log("keys", ms1.keys());
    console.log("values", ms1.values());
    expect(ms1.values().every((x) => x > 0)).toBeTruthy();
});
