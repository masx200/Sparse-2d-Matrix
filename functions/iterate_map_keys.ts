export function iterate_deep_map_keys<K, V>(
    map: Map<K, V>,
    output: { (arg0: K[]): void }
) {
    map.forEach((v: V, k: K) => {
        // console.log({ v, k });
        if (v instanceof Map) {
            // console.log("v is map");
            iterate_deep_map_keys(v as Map<K, any>, (o: K[]) =>
                output([k, ...o])
            );
        } else {
            // console.log("v is not map");
            output([k]);
        }
    });
}
