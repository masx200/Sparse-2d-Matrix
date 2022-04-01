export const digits_of_matrix = 4;
export const base_of_matrix = Math.floor(
    Math.pow(Number.MAX_SAFE_INTEGER, 1 / digits_of_matrix)
);
export const max_size_of_matrix = Math.pow(base_of_matrix, digits_of_matrix);
export const max_size_of_map = 2 * 12;
