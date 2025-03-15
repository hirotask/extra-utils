/**
 * Calculates the sum of an array of numbers.
 * @param nums - Array of numbers to sum
 * @returns The sum of all numbers in the array
 */
export function sum(nums: number[]): number {
    return nums.reduce((a, b) => {
        return a + b;
    }, 0);
}

/**
 * Calculates the average of an array of numbers.
 * @param nums - Array of numbers to average
 * @returns The average of all numbers in the array
 * @throws May throw a divide by zero error if an empty array is provided
 */
export function average(nums: number[]): number {
    return sum(nums) / nums.length;
}

/**
 * Finds the maximum value in an array of numbers.
 * @param nums - Array of numbers to search for the maximum value
 * @returns The maximum value in the array
 * @throws May throw an error if an empty array is provided
 */
export function max(nums: number[]): number {
    return nums.reduce((a, b) => {
        return Math.max(a, b);
    });
}

/**
 * Finds the minimum value in an array of numbers.
 * @param nums - Array of numbers to search for the minimum value
 * @returns The minimum value in the array
 * @throws May throw an error if an empty array is provided
 */
export function min(nums: number[]): number {
    return nums.reduce((a, b) => {
        return Math.min(a, b);
    });
}

/**
 * Finds the maximum value after applying a transformation function to each element.
 * @param nums - Array of numbers to process
 * @param predicate - Function to transform each element before comparison
 * @returns The maximum value after transformation
 * @throws May throw an error if an empty array is provided
 */
export function maxOf(
    nums: number[],
    predicate: (it: number) => number
): number {
    return max(nums.map(predicate));
}

/**
 * Finds the minimum value after applying a transformation function to each element.
 * @param nums - Array of numbers to process
 * @param predicate - Function to transform each element before comparison
 * @returns The minimum value after transformation
 * @throws May throw an error if an empty array is provided
 */
export function minOf(
    nums: number[],
    predicate: (it: number) => number
): number {
    return min(nums.map(predicate));
}

/**
 * Returns the number if it satisfies the predicate, otherwise returns null.
 * @param num - The number to check
 * @param predicate - Function to test the number
 * @returns The original number if it passes the predicate, otherwise null
 */
export function takeIf(
    num: number,
    predicate: (it: number) => boolean
): number | null {
    if (predicate(num)) {
        return num;
    }

    return null;
}

/**
 * Returns the number if it does not satisfy the predicate, otherwise returns null.
 * @param num - The number to check
 * @param predicate - Function to test the number
 * @returns The original number if it fails the predicate, otherwise null
 */
export function takeUnless(
    num: number,
    predicate: (it: number) => boolean
): number | null {
    if (predicate(num)) {
        return null;
    }

    return num;
}

/**
 * Creates an array of numbers from start to end, inclusive.
 * @param start - The starting number
 * @param end - The ending number (inclusive)
 * @returns An array containing all numbers from start to end
 */
export function range(start: number, end: number): number[] {
    const result: number[] = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

/**
 * Creates an array of numbers from start to end, exclusive of end.
 * @param start - The starting number
 * @param end - The ending number (exclusive)
 * @returns An array containing all numbers from start to end-1
 */
export function until(start: number, end: number): number[] {
    const result: number[] = [];

    for (let i = start; i < end; i++) {
        result.push(i);
    }

    return result;
}

/**
 * Creates a descending array of numbers from start to end, inclusive.
 * @param start - The starting number (higher value)
 * @param end - The ending number (lower value, inclusive)
 * @returns An array containing all numbers from start down to end
 */
export function downTo(start: number, end: number): number[] {
    const result: number[] = [];

    for (let i = start; i >= end; i--) {
        result.push(i);
    }

    return result;
}

/**
 * Executes a callback function a specified number of times.
 * @param num - The number of times to execute the callback
 * @param callback - The function to execute, receives the current iteration index
 */
export function repeat(num: number, callback: (it: number) => void): void {
    for (let i = 0; i < num; i++) {
        callback(i);
    }
}
