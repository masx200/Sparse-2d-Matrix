import { assert_true } from "../test/assert_true";

export function assert_not_undefined(
    v: any
): asserts v is Exclude<any, undefined> {
    assert_true(typeof v !== "undefined", "should not undefined");
}
