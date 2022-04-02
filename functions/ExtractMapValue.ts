export type ExtractMapValue<A extends Map<any, any>> = A extends Map<
    any,
    infer P
>
    ? P
    : never;
