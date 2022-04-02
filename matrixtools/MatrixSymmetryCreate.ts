import { assert_true } from "../test/assert_true";
import { matrixkeyiterator } from "./matrixkeyiterator";
import { MatrixCreate } from "./MatrixCreate";
import { MatrixSymmetry } from "./MatrixSymmetry";
import { MatrixSymmetryOptions } from "./MatrixSymmetryOptions";
import { MatrixToArrays } from "./MatrixToArrays";
import { MatrixForEach } from "./MatrixForEach";
import { assertInteger } from "../test/assertInteger";
/**
 *
 * 创建稀疏二维矩阵对称式
 */
export function MatrixSymmetryCreate<R extends number = number>(
    opts: MatrixSymmetryOptions<R>
): MatrixSymmetry<R> {
    const { row } = opts;
    const column = row;
    assertInteger(row);
    assertInteger(column);
    function assertnotoutofbounds(inputrow: number, inputcolumn: number) {
        //序号应该从0开始到row-1结束
        if (
            inputrow > row - 1 ||
            inputcolumn > column - 1 ||
            inputrow < 0 ||
            inputcolumn < 0
        ) {
            throw new Error("row or column out of bounds");
        }
    }
    if (row !== column) {
        throw new Error("Symmetry Matrix , row, column should equal");
    }
    const { initializer } = opts;
    const matrix = MatrixCreate({ row, column });
    const defaultvalue = 0;

    // opts?.default ?? 0;
    function get(inputrow: number, inputcolumn: number): number {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        assertnotoutofbounds(inputrow, inputcolumn);
        return (
            matrix.get(
                Math.min(inputrow, inputcolumn),
                Math.max(inputrow, inputcolumn)
            ) ?? defaultvalue
        );
    }

    function set(inputrow: number, inputcolumn: number, value: number): void {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        assertnotoutofbounds(inputrow, inputcolumn);
        assert_true(typeof value === "number");
        matrix.set(
            Math.min(inputrow, inputcolumn),
            Math.max(inputrow, inputcolumn),
            value
        );
    }
    // console.log(Matrix);
    function values(): number[] {
        //fix bug
        // return Array.from(matrix.values());
        return Array.from(keys()).map(([left, right]) => {
            return get(left, right);
        });
    }
    function keys(): [number, number][] {
        return Array.from(matrix.keys());
    }

    function entries(): [number, number, number][] {
        // return Array.from(matrix.entries());
        //fix bug
        return Array.from(keys()).map(([left, right]) => {
            return [left, right, get(left, right)];
        });
    }
    const has = (inputrow: number, inputcolumn: number): boolean => {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        return (
            matrix.has(inputrow, inputcolumn) ||
            matrix.has(inputcolumn, inputrow)
        );
    };
    const at = (inputrow: number, inputcolumn: number) => {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        return get(
            inputrow < 0 ? row + inputrow : inputrow,
            inputcolumn < 0 ? column + inputcolumn : inputcolumn
        );
    };

    const obj: MatrixSymmetry<R> = {
        ...matrix,
        at,
        row: row as R,
        column: column as R,
        // delete: (row: number, column: number) => {
        //     return Matrix.delete(
        //         Math.min(row, column),
        //         Math.max(row, column)
        //     );
        // },
        has,
        // clear: Matrix.clear,
        // size: Matrix.size,
        symmetry: true,
        values,
        keys,
        entries,
        get,
        set,
        get [Symbol.toStringTag]() {
            return "MatrixSymmetry";
        },
        toJSON() {
            return MatrixToArrays(obj);
        },
        [Symbol.iterator]() {
            return MatrixToArrays(obj)[Symbol.iterator]();
        },
        forEach(callback): void {
            MatrixForEach(obj, callback);
        },
    };

    if (initializer) {
        for (let [i, j] of matrixkeyiterator(row, column)) {
            const value = initializer(i, j);
            if (typeof value === "number") {
                set(i, j, value);
            }
        }
    }
    return obj;
}
