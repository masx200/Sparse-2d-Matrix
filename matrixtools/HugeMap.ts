import { max_size_of_map } from "./max_size_of_map";
const store_symbol = Symbol();

export class HugeMap<K, V> extends Map<K, V> implements Map<K, V> {
    [store_symbol]: Map<number, Map<K, V>> = new Map();
    constructor(entries?: readonly (readonly [K, V])[] | null) {
        super(entries);
    }
    clear(): void {
        this[store_symbol].forEach((m) => {
            m.clear();
        });
    }
    delete(key: K): boolean {}
    forEach(
        callbackfn: (value: V, key: K, map: Map<K, V>) => void,
        thisArg?: any
    ): void {}
    get(key: K): V | undefined {}
    has(key: K): boolean {}
    set(key: K, value: V): this {}
    // readonly size: number;
    get size(): number {}
    get [Symbol.toStringTag](): string {
        return "HugeMap";
    }
    [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.entries();
    }

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): IterableIterator<[K, V]> {}

    /**
     * Returns an iterable of keys in the map
     */
    keys(): IterableIterator<K> {}

    /**
     * Returns an iterable of values in the map
     */
    values(): IterableIterator<V> {}
}
