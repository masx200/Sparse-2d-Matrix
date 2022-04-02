export type ExtractArrayItem<A extends any[]> = A extends Array<infer P>
    ? P
    : never;
