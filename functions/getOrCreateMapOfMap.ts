export function getOrCreateMapOfMap<K, V>(
    p: Map<K, Map<K, V>>,
    key: K
): Map<K, V> {
    if (p.has(key)) {
        const map = p.get(key);

        if (map) {
            return map;
        }
    }
    const created = new Map<K, V>();
    p.set(key, created);
    return created;
}
