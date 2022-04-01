export class HugeMap<K, V> extends Map<K, V> implements Map<K, V> {
    clear(): void {}
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
    get [Symbol.toStringTag](): string {}
    [Symbol.iterator](): IterableIterator<[K, V]> {}

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
