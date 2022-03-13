// import { sum } from "lodash";

import { sum } from "./sum";

export function dot(arg0: number[], arg1: number[]): number {
    return sum(arg0.map((v, i) => v * arg1[i]));
}
