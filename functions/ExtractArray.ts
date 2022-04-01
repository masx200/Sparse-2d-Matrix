
export type ExtractArray<A extends any[]> = A extends Array<infer P> ? P : never;
