/**
 * @param a minimal number (inclusive)
 * @param b maximal number (inclusive)
 * @returns random integer between two integers
 */
function rand_int(a: number, b: number) {
	return a + Math.floor((b + 1 - a) * Math.random());
}

/**
 * @param length length of the array
 * @param sum sum of the numbers
 * @returns array of random non-negative integers whose sum is the given sum
 */
export function rand_ints_with_sum(length: number, sum: number) {
	let result: number[] = new Array(length).fill(0);

	for (let s = 0; s < sum; s++) {
		const index = rand_int(0, length - 1);
		result[index] += 1;
	}

	return result;
}
