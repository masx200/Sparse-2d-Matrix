export interface MatrixSymmetryOptions<R extends number = number> {
    row: R;

    // default?: number;
    initializer?: (row: number, column: number) => number;
}
