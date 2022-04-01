export type ExtractMapKey<A extends Map<any, any>> = A extends Map<infer P, any> ? P : never;
