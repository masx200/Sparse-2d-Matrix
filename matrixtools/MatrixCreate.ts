import { numberstostringkeynotsymmetry } from "../functions/numberstostringkeynotsymmetry";
import { matrixkeyiterator } from "./matrixkeyiterator";
import { MatrixSymbol } from "./MatrixSymbol";
import { Matrix } from "./Matrix";
import { asserttrue } from "../test/asserttrue";
import { MatrixOptions } from "./MatrixOptions";

import { max_size_of_map } from "./max_size_of_map";
import { MatrixToArrays } from "./MatrixToArrays";
import { assertnumber } from "../test/assertnumber";
/* 创建稀疏二维矩阵 非对称*/
export function MatrixCreate<
    R extends number = number,
    C extends number = number
>(opts: MatrixOptions<R, C>): Matrix<R, C> {
    const { row, column, initializer } = opts;

    /* Map maximum size exceeded 
    16777216
    */
    const valuesrecord: Map<
        number,
        Map<`${number},${number}`, number>
    > = new Map();
    function get_index_of_row_and_column(
        inputrow: number,
        inputcolumn: number
    ): number {
        return Math.floor(
            ((inputrow + 1) * (1 + inputcolumn)) / max_size_of_map
        );
    }
    function get_map_of_row_and_column(
        inputrow: number,
        inputcolumn: number
    ): Map<`${number},${number}`, number> {
        const index = get_index_of_row_and_column(inputrow, inputcolumn);
        const map = valuesrecord.get(index);
        if (map) {
            return map;
        } else {
            const created = new Map();
            valuesrecord.set(index, created);
            return created;
        }
    }
    // if (row * column > max_size_of_map) {
    //     throw new Error(
    //         "can not create map size greater than " + max_size_of_map
    //     );
    // }
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
    if (!(row > 0 && column > 0)) {
        throw new Error(" row, column should greater than 0");
    }

    const defaultvalue = 0;

    //opts?.default ?? 0;
    function get(inputrow: number, inputcolumn: number): number {
        assertnotoutofbounds(inputrow, inputcolumn);
        const map = get_map_of_row_and_column(inputrow, inputcolumn);
        return (
            map.get(numberstostringkeynotsymmetry(inputrow, inputcolumn)) ??
            defaultvalue
        );
    }
    const at = (inputrow: number, inputcolumn: number) => {
        return get(
            inputrow < 0 ? row + inputrow : inputrow,
            inputcolumn < 0 ? column + inputcolumn : column
        );
    };

    function set(inputrow: number, inputcolumn: number, value: number): void {
        assertnumber(value);
        assertnotoutofbounds(inputrow, inputcolumn);
        asserttrue(!Number.isNaN(value));
        const map = get_map_of_row_and_column(inputrow, inputcolumn);
        if (defaultvalue === value) {
            map.delete(numberstostringkeynotsymmetry(inputrow, inputcolumn));
            return;
        }

        map.set(numberstostringkeynotsymmetry(inputrow, inputcolumn), value);
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
        [Symbol.toStringTag]: "Matrix",
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
