/*
 * Primitive types
 *  - Type declaration: number, string, boolean, null, undefined, any and object
 *  - Errors:
 *    - assigning a value of another type
 *    - value override
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Multiple types with type composition
 */

let age: number = 5;
const name: string = "mango";

// Bad practiсe
let value: any = 5;
value = "some text";

// Don't use
let user: object = {};
user = {};

let id: string | number | boolean = 5;
id = "text";
id = true;

console.log(age, name, value, user, id);
export {};
