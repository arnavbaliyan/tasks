/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else if (numbers.length === 0) {
        return [];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number) => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
// Use Number() to convert string to integer
export function stringsToIntegers(numbers: string[]): number[] {
    const convert_str = numbers.map((num: string): number =>
        Number(num) ? Number(num) : 0
    );
    return convert_str;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSign = amounts.map((noSign: string): string =>
        noSign[0] === "$" ? noSign.substring(1) : noSign
    );
    return removeSign.map((noSign: string): number =>
        isNaN(Number(noSign)) ? 0 : Number(noSign)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_list = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return new_list.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    const shortWordsCount = shortWords.length;
    return shortWordsCount;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const color_check = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green"
    );
    return color_check;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (totalvalue: number, nums: number) => totalvalue + nums,
        0
    );
    if (sum) {
        return sum + "=" + addends.join("+");
    } else {
        return "0=0";
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstpos = values.every((val: number): boolean => val > 0);
    if (firstpos) {
        const getSum = values.reduce(
            (val: number, CurrSum: number) => val + CurrSum,
            0
        );
        const new_array = [...values, getSum];
        return new_array;
    } else {
        const getSum = values.findIndex((val: number): boolean => val < 0);
        const new_array = values.slice(0, getSum);
        const sum = new_array.reduce(
            (val: number, CurrSum: number) => val + CurrSum,
            0
        );
        const a = [...values];
        a.splice(getSum + 1, 0, sum);
        return a;
    }
}
