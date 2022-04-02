import { assert_true } from "../test/assert_true";
import { isObjectOrFunction } from "./isObjectOrFunction";
import { KeysOfHighDimensionalMap } from "./KeysOfHighDimensionalMap";
import { SubtractInput } from "./SubtractInput";

export function assertValidateKeys<K, D extends Exclude<SubtractInput, 0>>(
    dimension: D,
    keys: KeysOfHighDimensionalMap<K, D>
): asserts keys is KeysOfHighDimensionalMap<K, D> {
    function keysValidator(
        keys: KeysOfHighDimensionalMap<K, D>
    ): asserts keys is KeysOfHighDimensionalMap<K, D> {
        //要求keys当中不能是对象类型的元素
        assert_true(keys.length === dimension, "keys length mismatch");
        assert_true(
            keys.every((k) => {
                return !isObjectOrFunction(k);
            }),
            "keys item must not be an object or function"
        );
    }
    return keysValidator(keys);
}
