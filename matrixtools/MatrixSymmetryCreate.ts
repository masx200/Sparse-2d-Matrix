import { assert_true } from "../test/assert_true";
import { matrixkeyiterator } from "./matrixkeyiterator";

import { MatrixSymmetry } from "./MatrixSymmetry";
import { MatrixSymmetryOptions } from "./MatrixSymmetryOptions";
import { MatrixToArrays } from "./MatrixToArrays";
import { MatrixForEach } from "./MatrixForEach";
import { assertInteger } from "../test/assertInteger";
import { MatrixSymbol } from "./MatrixSymbol";
import { MatrixFill } from "./MatrixFill";
import { Matrix } from "./Matrix";
/**
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

    /* 对称矩阵压缩存储 */
    const store: Float64Array = new Float64Array((row * (row + 1)) / 2);
    function symmetry_key_to_index(row: number, column: number): number {
        if (row >= column) {
            return (row * (row + 1)) / 2 + column;
        } else {
            return symmetry_key_to_index(column, row);
        }
    }
    const matrix: Pick<Matrix, "get" | "set"> = {
        get(row: number, column: number) {
            return store[symmetry_key_to_index(row, column)] ?? 0;
        },
        set(row: number, column: number, value: number) {
            store[symmetry_key_to_index(row, column)] = value;
        },
    };
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
        return Array.from(matrixkeyiterator(row, column));
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
        if (
            inputrow > row - 1 ||
            inputcolumn > column - 1 ||
            inputrow < 0 ||
            inputcolumn < 0
        ) {
            return false;
        } else {
            return true;
        }
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
        fill(value: number) {
            MatrixFill(obj, value);
        },
        [MatrixSymbol]: true,
        at,
        row: row as R,
        column: column as R,

        has,

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
        for (let [i, j] of Array.from(matrixkeyiterator(row, column)).filter(
            ([i, j]) => {
                return i >= j;
            }
        )) {
            //对称矩阵只要初始化一半即可

            const value = initializer(i, j);
            if (typeof value === "number" && !Number.isNaN(value)) {
                set(i, j, value);
            } else {
                throw new Error("invalid return value:" + value);
            }
        }
    }
    return obj;
}
