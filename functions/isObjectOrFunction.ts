export function isObjectOrFunction(
    o: any
): o is NonNullable<((args: any[]) => any) | Object> {
    if (!o) {
        return false;
    }
    if (typeof o === "object") {
        return true;
    }
    if (typeof o === "function") {
        return true;
    }
    return false;
}
