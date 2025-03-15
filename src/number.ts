export function sum(nums: number[]): number {
    return nums.reduce((a, b) => {
        return a + b;
    }, 0);
}

export function average(nums: number[]): number {
    return sum(nums) / nums.length;
}

export function max(nums: number[]): number {
    return nums.reduce((a, b) => {
        return Math.max(a, b);
    });
}

export function min(nums: number[]): number {
    return nums.reduce((a, b) => {
        return Math.min(a, b);
    });
}

export function maxOf(
    nums: number[],
    predicate: (it: number) => number
): number {
    return max(nums.map(predicate));
}

export function minOf(
    nums: number[],
    predicate: (it: number) => number
): number {
    return min(nums.map(predicate));
}

export function takeIf(
    num: number,
    predicate: (it: number) => boolean
): number | null {
    if (predicate(num)) {
        return num;
    }

    return null;
}

export function takeUnless(
    num: number,
    predicate: (it: number) => boolean
): number | null {
    if (predicate(num)) {
        return null;
    }

    return num;
}

export function range(start: number, end: number): number[] {
    const result: number[] = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

export function until(start: number, end: number): number[] {
    const result: number[] = [];

    for (let i = start; i < end; i++) {
        result.push(i);
    }

    return result;
}

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
