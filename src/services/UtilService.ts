/**
 * Generates an array of unique random numbers of the specified `length`, where each number is between `min` and `max` (inclusive).
 * 
 * @param {number} length - The length of the array to generate.
 * @param {number} min - The minimum value (inclusive) that can appear in the array.
 * @param {number} max - The maximum value (inclusive) that can appear in the array.
 * @returns {number[]} An array of unique random numbers of the specified `length` with values between `min` and `max`.
 * 
 * @throws {Error} If `min` is greater than `max`, or if `length` is greater than the number of available unique numbers.
 * 
 * @example
 * // Generate an array of 5 unique random numbers between 10 and 20 (inclusive)
 * const randomNumbers = generateUniqueRandomArray(5, 10, 20);
 * console.log(randomNumbers); // [10, 12, 15, 18, 20] (example output)
 */
export function generateUniqueRandomArray(length: number, min: number, max: number): number[] {
    if (min > max) {
        throw new Error('Invalid range: min should be less than or equal to max');
    }

    const rangeSize = max - min + 1;

    if (length > rangeSize) {
        throw new Error(`Cannot generate ${length} unique numbers between ${min} and ${max}, only ${rangeSize} possible.`);
    }

    const uniqueNumbers: Set<number> = new Set();

    while (uniqueNumbers.size < length) {
        // Generate a random number between min and max (inclusive)
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNumber); // Set will automatically handle duplicates
    }

    return Array.from(uniqueNumbers);
}
