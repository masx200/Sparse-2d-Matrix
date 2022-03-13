import { numberstostringkeynotsymmetry } from "../functions/numberstostringkeynotsymmetry";
import { matrixkeyiterator } from "./matrixkeyiterator";
import { MatrixSymbol } from "./MatrixSymbol";
import { Matrix } from "./Matrix";
import { asserttrue } from "../test/asserttrue";
import { MatrixOptions } from "./MatrixOptions";

/* 创建稀疏二维矩阵 非对称*/
export function MatrixCreate<
    R extends number = number,
    C extends number = number
>(opts: MatrixOptions<R, C>): Matrix<R, C> {
    const { row, column, initializer } = opts;
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
    const valuesrecord = new Map<`${number},${number}`, number>();
    const defaultvalue = 0;

    //opts?.default ?? 0;
    function get(inputrow: number, inputcolumn: number): number {
        assertnotoutofbounds(inputrow, inputcolumn);
        return (
            valuesrecord.get(
                numberstostringkeynotsymmetry(inputrow, inputcolumn)
            ) ?? defaultvalue
        );
    }
    const at = (inputrow: number, inputcolumn: number) => {
        return get(
            inputrow < 0 ? row + inputrow : inputrow,
            inputcolumn < 0 ? column + inputcolumn : column
        );
    };

    function set(inputrow: number, inputcolumn: number, value: number): void {
        asserttrue(typeof value === "number");
        assertnotoutofbounds(inputrow, inputcolumn);
        if (defaultvalue === value && get(inputrow, inputcolumn) === value) {
            return;
        }
        asserttrue(!Number.isNaN(value));
        valuesrecord.set(
            numberstostringkeynotsymmetry(inputrow, inputcolumn),
            value
        );
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
            if (typeof value === "number") {
                set(i, j, value);
            } else {
                throw new Error("invalid return value");
            }
        }
    }
    return obj;
}
