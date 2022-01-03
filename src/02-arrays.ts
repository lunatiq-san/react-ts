/*
 * Arrays
 *  - Notations `type[]` and `Array<тип>`
 *  - `(type | type)[]`
 *  - `readonly` and `ReadonlyArray<type>`
 *  - Tuple `[type, type]`, e.g. an array of coordinates
 */

const temps: readonly number[] = [30, 31, 27, 28, 32];

// Generic
// const temps: Array<number> = [30, 31, 27, 28, 32];

// If 'readonly' - error
// temps.push(5);

// error
// temps.push('5');

const someTemps: (number | string)[] = [30, 31, 27, 28, 32, "string", "text"];

const coords: [number, number] = [50.4501, 30.5234];
const rgb: [number, number, number] = [255, 0, 255];

const arrA = [1, 2, 3, 4, 5];
const arrB = [...arrA];

export {};
