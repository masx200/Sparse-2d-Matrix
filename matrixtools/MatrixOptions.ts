export interface MatrixOptions<
    R extends number = number,
    C extends number = number
> {
    row: R;
    column: C;
    // default?: number;
    initializer?: (row: number, column: number) => number;
}
