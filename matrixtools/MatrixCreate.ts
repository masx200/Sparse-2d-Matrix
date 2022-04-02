// import { numberstostringkeynotsymmetry } from "../functions/numberstostringkeynotsymmetry";
import { matrixkeyiterator } from "./matrixkeyiterator";
import { MatrixSymbol } from "./MatrixSymbol";
import { Matrix } from "./Matrix";
import { assert_true } from "../test/assert_true";
import { MatrixOptions } from "./MatrixOptions";

import { max_size_of_map } from "./max_size_of_map";
import { MatrixToArrays } from "./MatrixToArrays";
import { assertnumber } from "../test/assertnumber";
import { MatrixForEach } from "./MatrixForEach";
import { assertInteger } from "../test/assertInteger";
import { createHighDimensionalMap2 } from "../functions/createHighDimensionalMap2";
/* 创建稀疏二维矩阵 非对称*/
export function MatrixCreate<
    R extends number = number,
    C extends number = number
>(opts: MatrixOptions<R, C>): Matrix<R, C> {
    const { row, column, initializer } = opts;
    assertInteger(row);
    assertInteger(column);
    assert_true(
        column <= max_size_of_map && row <= max_size_of_map,
        "row and column can not greater than " + max_size_of_map
    );

    if (!(row > 0 && column > 0)) {
        throw new Error(" row, column should greater than 0");
    }

    const defaultvalue = 0;

    /* Map maximum size exceeded 
    16777216
    */
    // const valuesrecord: Map<
    //     number,
    //     Map<`${number},${number}`, number>
    // > = new Map();
    const store = createHighDimensionalMap2<number, number>();
    function assertnotoutofbounds(inputrow: number, inputcolumn: number) {
        //序号应该从0开始到row-1结束
        if (
            inputrow > row - 1 ||
            inputcolumn > column - 1 ||
            inputrow < 0 ||
            inputcolumn < 0
        ) {
            throw new Error(
                "row or column out of bounds:" + inputrow + "," + inputcolumn
            );
        } else {
            return true;
        }
    }

    //opts?.default ?? 0;
    function get(inputrow: number, inputcolumn: number): number {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        assertnotoutofbounds(inputrow, inputcolumn);
        const map = store;
        return map.get([inputrow, inputcolumn]) ?? defaultvalue;
    }
    const at = (inputrow: number, inputcolumn: number) => {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        return get(
            inputrow < 0 ? row + inputrow : inputrow,
            inputcolumn < 0 ? column + inputcolumn : inputcolumn
        );
    };

    function set(inputrow: number, inputcolumn: number, value: number): void {
        assertInteger(inputrow);
        assertInteger(inputcolumn);
        assertnumber(value);
        assertnotoutofbounds(inputrow, inputcolumn);
        assert_true(!Number.isNaN(value));
        const map = store;
        const currentkeys: [number, number] = [inputrow, inputcolumn];
        if (defaultvalue === value) {
            map.delete(currentkeys);
            return;
        }

        map.set(currentkeys, value);
    }
    // console.log(valuesrecord);
    function values(): number[] {
        return Array.from(keys()).map(([left, right]) => {
            return get(left, right);
        });
        // return Array.from(valuesrecord.values());
    }
    function keys(): [number, number][] {
        return Array.from(matrixkeyiterator(row, column));
        // return Array.from(valuesrecord.keys()).map(stringkeytonumbers);
    }

    function entries(): [number, number, number][] {
        return Array.from(keys()).map(([left, right]) => {
            return [left, right, get(left, right)];
        });
    }
    const has = (inputrow: number, inputcolumn: number) => {
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
    const obj: Matrix<R, C> = {
        forEach(callback): void {
            MatrixForEach(obj, callback);
        },
        [Symbol.iterator]() {
            return MatrixToArrays(obj)[Symbol.iterator]();
        },
        toJSON() {
            return MatrixToArrays(obj);
        },
        at,
        [MatrixSymbol]: true,
        row: row as R,
        column: column as C,
        // clear: () => valuesrecord.clear(),
        has,
        // size: () => valuesrecord.size,
        values,
        keys,
        entries,
        get,
        set,
        // delete: (row: number, column: number) => {
        //     return valuesrecord.delete(
        //         numberstostringkeynotsymmetry(row, column)
        //     );
        // },
        get [Symbol.toStringTag]() {
            return "Matrix";
        },
    };

    if (initializer) {
        for (let [i, j] of matrixkeyiterator(row, column)) {
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
